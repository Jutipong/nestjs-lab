import { Injectable } from '@nestjs/common';
import { Cron, Interval, SchedulerRegistry } from '@nestjs/schedule';
import { match } from 'assert';
import { CronJob } from 'cron';
import { randomInt } from 'crypto';

@Injectable()
export class ConJobsService {
	count = 0;
	constructor(private schedulerRegistry: SchedulerRegistry) { }

	@Cron('10 * * * * *', {
		name: 'notifications',
	})
	triggerNotifications() {
		// console.log('triggerNotifications');
		this.count++
		this.addCronJob("Job: " + this.count, String(randomInt(10, 50)))


		if (this.count == 5) {
			this.deleteCron()
		}
	}

	callCronJob() {
		const job = this.schedulerRegistry.getCronJob('notifications');
		job.stop();
		console.log(job.lastDate());
	}

	addCronJob(name: string, seconds: string) {
		const job = new CronJob(`${seconds} * * * * *`, () => {
			console.log(`time (${seconds}) for job ${name} to run!`);
		});

		this.schedulerRegistry.addCronJob(name, job);
		job.start();

		console.log(
			`job ${name} added for each minute at ${seconds} seconds!`,
		);
	}

	@Interval(300000)
	getCrons() {
		const jobs = this.schedulerRegistry.getCronJobs();
		jobs.forEach((value, key, map) => {
			let next;
			try {
				next = value.nextDates().toDate();
			} catch (e) {
				next = 'error: next fire date is in the past!';
			}
			console.log(`job: ${key} -> next: ${next}`);
		});
	}

	deleteCron() {
		const jobs = this.schedulerRegistry.getCronJobs();
		jobs.forEach((value, key, map) => {
			this.schedulerRegistry.deleteCronJob(key);
			console.log(`job ${key} deleted!`);
		});
	}
}
