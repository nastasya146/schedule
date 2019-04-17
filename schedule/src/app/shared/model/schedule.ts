import { Day } from './day';
import { ScheduleState } from './schedule-state';

export class Schedule {
    id: string;
    userId: string;
    days: Array<Day>;
    state: ScheduleState;
}