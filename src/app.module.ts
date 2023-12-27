import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScheduleService } from './schedule/schedule.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ScheduleService],
})
export class AppModule {}
