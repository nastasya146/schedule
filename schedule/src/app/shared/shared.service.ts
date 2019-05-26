import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScheduleState } from './model/schedule-state';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url: string = 'api';
  userId: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
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
  
  public setScheduleState(id: string, state: ScheduleState) {
    const url = this.url + '/schedule';
    return this.http.put(url, {id: id, state: state }, this.httpOptions);

  }
}
