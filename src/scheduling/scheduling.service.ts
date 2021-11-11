import { Injectable, Logger } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class SchedulingService {
	constructor(private schedulerRegistry: SchedulerRegistry) { }
	private readonly logger = new Logger(SchedulingService.name);

	// @Cron('10 * * * * *')

	// ทุกวันที่ 1 ของเดือน

	// @Cron('00 40 21 10 * *')
	// @Cron('* * * * * *')
	handleCron() {
		// this.logger.debug('Called when the current second is 45');

		var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
		console.log(myDate)
	}

	// @Cron('* * 8 * * *', {
	// 	name: 'notifications',
	// })
	// triggerNotifications() {
	// 	console.log("triggerNotifications");
	// }

	// addCronJob(name: string, seconds: string) {
	// 	const job = new CronJob(`${seconds} * * * * *`, () => {
	// 		this.logger.warn(`time (${seconds}) for job ${name} to run!`);
	// 	});

	// 	this.schedulerRegistry.addCronJob(name, job);
	// 	job.start();

	// 	this.logger.warn(
	// 		`job ${name} added for each minute at ${seconds} seconds!`,
	// 	);
	// }

	

	// addCronJob(name: string, seconds: string) {
	// 	const job = new CronJob(`${seconds} * * * * *`, () => {
	// 		this.logger.warn(`time (${seconds}) for job ${name} to run!`);
	// 	});

	// 	this.schedulerRegistry.addCronJob(name, job);
	// 	job.start();

	// 	this.logger.warn(
	// 		`job ${name} added for each minute at ${seconds} seconds!`,
	// 	);
	// }

}
