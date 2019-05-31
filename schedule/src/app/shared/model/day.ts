import { Shift } from './shift';
import { Moment } from 'moment';

export class Day {
    date: Moment;
    shift: Shift;
    holiday?: string;
}