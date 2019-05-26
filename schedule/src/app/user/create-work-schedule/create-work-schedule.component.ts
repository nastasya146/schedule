import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from 'src/app/shared/model/day';
import { MatDatepickerInputEvent } from '@angular/material';
import { Shift } from 'src/app/shared/model/shift';
import { Schedule } from 'src/app/shared/model/schedule';
import { ScheduleState } from 'src/app/shared/model/schedule-state';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-create-work-schedule',
  templateUrl: './create-work-schedule.component.html',
  styleUrls: ['./create-work-schedule.component.scss']
})
export class CreateWorkScheduleComponent implements OnInit {
    @Output() emitSend = new EventEmitter<Schedule>();
    date = new Date();
    days: Array<Day> = [];
    shifts: Array<Shift> = [
        new Shift("1", 600, 1080, 30),
        new Shift("2", 570, 1080, 60)
    ];
    constructor(private sharedService: SharedService) { }

    ngOnInit() {
    }

    dateChange(event: MatDatepickerInputEvent<Date>) {
        this.date = event.value;
    }

    public addDay() {
        this.days.push(new Day());
        this.days[this.days.length - 1].date = this.date;
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
}
