import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from 'src/app/shared/model/day';
import { MatDatepickerInputEvent, MatSelectChange } from '@angular/material';
import { Shift } from 'src/app/shared/model/shift';
import { Schedule } from 'src/app/shared/model/schedule';
import { ScheduleState } from 'src/app/shared/model/schedule-state';
import { SharedService } from 'src/app/shared/shared.service';
import { UserService } from '../user.service';
import { map } from 'rxjs/operators';
import { Moment } from 'moment';

@Component({
    selector: 'app-create-work-schedule',
    templateUrl: './create-work-schedule.component.html',
    styleUrls: ['./create-work-schedule.component.scss']
})
export class CreateWorkScheduleComponent implements OnInit {
    @Output() emitSend = new EventEmitter<Schedule>();
    date: Moment;
    days: Array<Day> = [];
    shifts: Shift[];
    constructor(private sharedService: SharedService,
        private userService: UserService) { }

    ngOnInit() {
        this.userService.getShifts()
            .subscribe(s => this.shifts = s)
    }

    dateChange(event: MatDatepickerInputEvent<Moment>) {
        this.date = event.value;
    }

    public addDay() {
        let newDay = new Day()
        newDay.date = this.date;
        this.days.push(newDay);
        this.userService.getHoliday(this.date).subscribe((result: string) => {
            newDay.holiday = result;
        });
    }
    public send() {
        const schedule: Schedule = {
            id: '',
            userId: this.sharedService.userId,
            days: this.days,
            state: ScheduleState.New
        }
        this.emitSend.emit(schedule);
    }

    onShiftSelectionChange(event: MatSelectChange, day: Day) {
        day.shift = event.value;
    }
}
