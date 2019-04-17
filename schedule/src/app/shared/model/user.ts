import { Schedule } from './schedule';

export class User {
    id: string;
    name: string;
    schedules: Array<Schedule> = [];
}