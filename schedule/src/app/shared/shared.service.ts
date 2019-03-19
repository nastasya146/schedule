import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScheduleState } from './model/schedule-state';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  public getWorkShifts() {

  }
  
  public setScheduleState(state: ScheduleState) {
  }
}
