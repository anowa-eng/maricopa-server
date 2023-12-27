const schedule = require('./../../../app/schedule/schedule.js');
const writeSchedule = require('./../../../app/schedule/writeSchedule.js')

import { Injectable } from '@nestjs/common';

@Injectable()
export class ScheduleService {
    schedule(timeRangesAsStrings=false) {
        return schedule(timeRangesAsStrings);
    }

    writeSchedule(): void {
       writeSchedule();
    }
}
