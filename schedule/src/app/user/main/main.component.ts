import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/shared/model/schedule';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  schedules: Array<Schedule>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getSchedules().subscribe(res => {
      this.schedules = res;
    })
  }

}
