import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedule } from 'src/app/shared/model/schedule';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {  
  url: string = 'api';
  constructor(private http: HttpClient,
    private sharedService: SharedService) { }

  public getSchedules() {
    const url = this.url + '/schedule' + '?userId=' + this.sharedService.userId;
    return this.http.get<Array<Schedule>>(url);
  }
}
