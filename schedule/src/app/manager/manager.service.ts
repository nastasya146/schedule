import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/model/user';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '../shared/model/schedule';

@Injectable({
    providedIn: 'root'
})
export class ManagerService {
    url: string = 'api';
    constructor(private http: HttpClient) { }

    public getUsers(): Observable<Array<User>> {
        return this.http.get<Array<User>>(this.url + '/user');
    }

    public getSchedules(user: User) {
        const url = this.url + '/schedule' + '?userId=' + user.id;
        return this.http.get<Array<Schedule>>(url);
    }

    public saveWorkShift() {

    }

    public deleteWorkShift() {

    }
}
