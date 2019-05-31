import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScheduleState } from './model/schedule-state';
import { User } from './model/user';
import { Shift } from './model/shift';
import { Observable } from 'rxjs';
import { Schedule } from './model/schedule';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url: string = 'api';
  userId: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public setUserId() {
    this.getUser().subscribe(res => this.userId = res.id);
  }

  private getUser() {
    const url = this.url + '/user/my';
    return this.http.get<User>(url);
  }

  public getWorkShifts() {
  }

  public setScheduleState(id: string, state: ScheduleState): Observable<Schedule> {
    const url = this.url + '/schedule' + '?stateId=' + state + '&scheduleId=' + id;
    return this.http.put<Schedule>(url, this.httpOptions);

  }

  public getDisplayText(shift: Shift): string {
    let text = "";
    let startHours = Math.floor(shift.start / 60).toString();
    let startMinutes = ((shift.start % 60).toString().length === 1 ? "0" + (shift.start % 60).toString() : (shift.start % 60).toString())
    let finishHours = Math.floor(shift.finish / 60).toString();
    let finishMinutes = ((shift.finish % 60).toString().length === 1 ? "0" + (shift.finish % 60).toString() : (shift.finish % 60).toString())
    text += startHours + ":" + startMinutes + "-" + finishHours + ":" + finishMinutes;
    text += shift.breakTime ? ("(" + shift.breakTime + ")") : "";
    return text;
  }
  
  deepCopyWithArrays(obj: any): any {
    const copy = {};
    const keys = Object.keys(obj);
    for (let i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      if (!Array.isArray(obj[key])) {
        if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
          copy[key] = this.deepCopyWithArrays(obj[key]);
        } else {
          copy[key] = obj[key];
        }
      } else {
        const arr = [];
        for (let j = 0, arrLen = obj[key].length; j < arrLen; j++) {
          if (Object.prototype.toString.call(obj[key][j]) === '[object Object]') {
            const item = this.deepCopyWithArrays(obj[key][j]);
            arr.push(item);
          } else {
            arr.push(obj[key][j]);
          }
        }
        copy[key] = arr;
      }
    }
    return copy;
  }
}
