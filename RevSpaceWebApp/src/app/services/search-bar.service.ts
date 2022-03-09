import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/User';
import { BackendService } from './backend.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  public searchedUsers: User[]=[];

  constructor(private http: HttpClient,
    private loginService: LoginService,
    private backendService: BackendService) { }

  authToken: string = this.loginService.getLoginInfo().authToken;
  searchHeader = new HttpHeaders({
    'Context-Type': 'application/json',
    'Authorization': this.authToken
  });

  searchUserByEmail(email: string): Observable<User[]> {
    const searchparams = new HttpParams().set('email', email);
    return this.http.get<User[]>(this.backendService.getBackendURL() + `/users/search/email`, { headers: this.searchHeader, params: searchparams });
  }

  searchUserByName(firstname: string, lastname: string): Observable<User[]> {
    const searchparams = new HttpParams().set('firstname', firstname).set('lastname', lastname);
    return this.http.get<User[]>(this.backendService.getBackendURL() + `/users/search/name`, { headers: this.searchHeader, params: searchparams });
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.backendService.getBackendURL() + `/users/all`, { headers: this.searchHeader });
  }

  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
