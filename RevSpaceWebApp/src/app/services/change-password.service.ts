import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';





@Injectable({
    providedIn: 'root'
})
export class ChangePasswordService {

    private urlBase = "http://localhost:9001";
    httpHead = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    };

    constructor(private http: HttpClient) { }
    

    public changePassword(user: string): Observable<User> {
        return this.http.post<User>(this.urlBase +"/users/password", user, this.httpHead);
    }
}
