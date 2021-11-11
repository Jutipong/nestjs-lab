/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { Cron, SchedulerRegistry } from '@nestjs/schedule';
import { SchedulingService } from './scheduling.service';

@Controller()
export class SchedulingController {

	constructor(private SchedulingService: SchedulingService) { }


	// test(){
	// 	const job = this.SchedulingService.triggerNotifications();

	// 	job.stop();
	// 	console.log(job.lastDate());
	// }

	// @Cron('55 * * * * *')
	// handleCron() {
	// 	var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
	// 	console.log(myDate)

	// 	const job = SchedulerRegistry.getCronJob('notifications');

	// 	job.stop();
	// 	console.log(job.lastDate());
	// }

	// @Cron('* * * * * *', {
	// 	name: 'notifications',
	// })
	// triggerNotifications() {
	// 	console.log("object");
	// }




}
