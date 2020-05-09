import { Injectable } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'

@Injectable()
export class SchedulerService {
  @Cron(new Date(Date.now() + 5 * 1000))
  startCron() {
    console.log('Start cron....')
  }

  @Cron(CronExpression.EVERY_HOUR)
  handleCron() {
    console.log('Cron every hour....')
  }
}
