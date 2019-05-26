import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schedule } from 'src/app/shared/model/schedule';
import { SharedService } from '../shared/shared.service';
import { User } from '../shared/model/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {  
    url: string = 'api';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };
    constructor(private http: HttpClient,
        private sharedService: SharedService) { }
    
    public getSchedules() {
        const url = this.url + '/schedule' + '?userId=' + this.sharedService.userId;
        return this.http.get<Array<Schedule>>(url);
    }

    public send(schedule: Schedule) {
        const url = this.url + '/schedule';
        return this.http.post<Schedule>(url, schedule, this.httpOptions);
    }
}