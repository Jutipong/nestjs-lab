/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Controller()
export class SchedulingController {

	@Cron('55 * * * * *')
	handleCron() {
		var myDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
		console.log(myDate)
	}

}
