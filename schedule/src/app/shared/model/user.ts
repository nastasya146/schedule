import { Schedule } from './schedule';
import { UserRole } from './user-role';

export class User {
    id: string;
    name: string;
    role: UserRole;
    schedules: Array<Schedule> = [];
}