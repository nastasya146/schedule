import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { User } from 'src/app/shared/model/user';
import { ScheduleState } from 'src/app/shared/model/schedule-state';
import { SharedService } from 'src/app/shared/shared.service';
import { Schedule } from 'src/app/shared/model/schedule';
import { Day } from 'src/app/shared/model/day';
import { Shift } from 'src/app/shared/model/shift';

@Component({
    selector: 'app-approval',
    templateUrl: './approval.component.html',
    styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

    users: Array<User>;
    displayedColumns: string[] = ['date', 'shift'];

    constructor(private managerService: ManagerService,
        private sharedService: SharedService) { }

    ngOnInit() {
        this.managerService.getUsers()
        .subscribe(u => this.users = u);
    }

    approve(schedule: Schedule) {
        this.sharedService.setScheduleState(schedule.scheduleID, ScheduleState.Approved)
        .subscribe(result => schedule.state = result.state);
    }

    return(schedule: Schedule) {
        this.sharedService.setScheduleState(schedule.scheduleID, ScheduleState.Returned)
        .subscribe(result => schedule.state = result.state);
    }

    onPanelOpened(user: User) {
        this.managerService.getSchedules(user).subscribe((schedules: Schedule[]) => user.schedules = schedules);
    }

    shiftToString(shift: Shift): string {
        return this.sharedService.getDisplayText(shift);
    }

    stateToString(schedule: Schedule): string {
        return ScheduleState[schedule.state];
    }
}
