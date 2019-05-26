import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { User } from 'src/app/shared/model/user';
import { ScheduleState } from 'src/app/shared/model/schedule-state';
import { SharedService } from 'src/app/shared/shared.service';
import { UserRole } from 'src/app/shared/model/user-role';
import { Shift } from 'src/app/shared/model/shift';

@Component({
    selector: 'app-approval',
    templateUrl: './approval.component.html',
    styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

    users: Array<User> = [
        {
            id: '1',
            name: "User1",
            role: UserRole.Manager,
            schedules: [
                {
                    id: '11',
                    userId: '1',
                    state: ScheduleState.New,
                    days: [
                        {
                            date: new Date(2019, 3, 21),
                            shift: new Shift("1", 600, 1800, 30)
                        },
                        {
                            date: new Date(2019, 3, 22),
                            shift: new Shift("1", 600, 1800, 30)
                        }
                    ]
                }
            ]
        },
        {
            id: '2',
            name: "User2",
            role: UserRole.User,
            schedules: []
        }
    ]
    constructor(private managerService: ManagerService,
        private sharedService: SharedService) { }

    ngOnInit() {
        this.managerService.getUsers()
        .subscribe(u => this.users = u);
    }

    approve(id: string) {
        this.sharedService.setScheduleState(id, ScheduleState.Approved)
        .subscribe();
    }

    return(id: string) {
        this.sharedService.setScheduleState(id, ScheduleState.Returned)
        .subscribe();
    }
}
