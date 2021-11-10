import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class SchedulingService {

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




}
