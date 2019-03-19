import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { User } from 'src/app/shared/model/user';

@Component({
    selector: 'app-approval',
    templateUrl: './approval.component.html',
    styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

    users: Array<User> = [
        {
            id: '1',
            name: "User1"
        },
        {
            id: '2',
            name: "User2"
        }
    ]
    constructor(private managerService: ManagerService) { }

    ngOnInit() {
        //this.users = this.managerService.getUsers()
        //.subscribe();
    }

    approve(id: string) {
        console.log('approved ', id);
    }

}
