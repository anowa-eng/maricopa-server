import { Controller, Get, Post } from '@nestjs/common';
import { ScheduleService } from './schedule/schedule.service';

@Controller()
export class AppController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get('/schedule')
  getSchedule(): {} {
    return this.scheduleService.schedule(true);
  }

  @Post('/schedule')
  writeSchedule() {
    try {
      this.scheduleService.writeSchedule();
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  }
}
