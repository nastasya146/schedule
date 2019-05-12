import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleState } from './model/schedule-state';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url: string = 'api';
  userId: string;

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
  }
}
