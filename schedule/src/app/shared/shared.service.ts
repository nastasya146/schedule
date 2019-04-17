import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleState } from './model/schedule-state';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url: string = 'api';
  userId: string;

  constructor(private http: HttpClient) { }

  public setUserId() {
    this.getUserId().subscribe(res => this.userId = res);
  }

  private getUserId() {
    const url = this.url + '/user';
    return this.http.get<string>(url);
  }

  public getWorkShifts() {
  }
  
  public setScheduleState(id: string, state: ScheduleState) {
  }
}
