import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ManagerService {
    url: string;
    constructor(private http: HttpClient) { }

    public getUsers(): Observable<Array<User>> {
        return this.http.get<Array<User>>(this.url);
    }

    public saveWorkShift() {

    }

    public deleteWorkShift() {

    }
}
