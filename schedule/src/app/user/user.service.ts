import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schedule } from 'src/app/shared/model/schedule';
import { SharedService } from '../shared/shared.service';
import { Attendance } from '../shared/model/attendance';
import { Shift } from '../shared/model/shift';
import { Observable } from 'rxjs';
import { Moment } from 'moment';

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

    public getShifts() {
        const url = this.url + '/workshift';
        return this.http.get<Array<Shift>>(url);
    }

    public send(schedule: Schedule) {
        const url = this.url + '/schedule';
        let data: any = this.sharedService.deepCopyWithArrays(schedule);
        data.days = data.days.map(it => {
            // TODO: date to DD-MM-YYYY
            console.log(it.date);
            let d = moment(it.date)
            it.date = it.date.format("DD-MM-YYYY");
            return it;
        })
        return this.http.post<Schedule>(url, schedule, this.httpOptions);
    }

    public checkIn(attendance: Attendance) {
        const url = this.url + '/attendance';
        return this.http.post<Attendance>(url, attendance, this.httpOptions);
    }

    public getHoliday(date: Moment): Observable<string> {
        const url = this.url + '/holiday' + '?date=' + date.format("DD-MM-") +'2018';
        return this.http.get<string>(url, {responseType: 'text' as 'json'});
    }
}