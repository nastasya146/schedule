import { Day } from './day';
import { ScheduleState } from './schedule-state';

export class Schedule {
    scheduleID?: string;
    id: string;
    userId: string;
    days: Array<Day>;
    state: ScheduleState;
}