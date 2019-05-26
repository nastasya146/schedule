import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Schedule';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.setUserId();
  }
}
