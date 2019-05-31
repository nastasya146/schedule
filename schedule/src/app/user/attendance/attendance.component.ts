import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { UserService } from '../user.service';
import { Attendance } from 'src/app/shared/model/attendance';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
    selector: 'app-attendance',
    templateUrl: './attendance.component.html',
    styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
    date: Date;
    time: Time;
    constructor(private userService: UserService,
        private sharedService: SharedService) { }

    ngOnInit() {
    }

    send() {
        const attendance: Attendance = {
            userId: this.sharedService.userId,
            date: this.date,
            time: this.time
        }
        this.userService.checkIn(attendance)
        .subscribe();
    }
}
