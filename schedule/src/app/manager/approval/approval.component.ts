import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { User } from 'src/app/shared/model/user';
import { ScheduleState } from 'src/app/shared/model/schedule-state';
import { SharedService } from 'src/app/shared/shared.service';

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
            schedules: [
                {
                    id: '11',
                    userId: '1',
                    state: ScheduleState.New,
                    days: [
                        {
                            date: new Date(2019, 3, 21),
                            shift: {
                                start: 600,
                                finish: 1800,
                                breakTime: 30
                            }
                        },
                        {
                            date: new Date(2019, 3, 22),
                            shift: {
                                start: 570,
                                finish: 1800,
                                breakTime: 60
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: '2',
            name: "User2",
            schedules: []
        }
    ]
    constructor(private managerService: ManagerService,
        private sharedService: SharedService) { }

    ngOnInit() {
        this.sharedService.setUserId();
        //this.users = this.managerService.getUsers()
        //.subscribe();
    }

    approve(id: string) {
        console.log('approved ', id);
    }

}
