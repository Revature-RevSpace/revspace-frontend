import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Credential } from '../models/Credential';
import { BackendService } from './backend.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private backendService: BackendService,
    private http: HttpClient,
    private lServ: LoginService
  ) { }

  private headers = new HttpHeaders({ 'Context-Type': 'application/json' });

  getUserById(id: number, myHeaders: HttpHeaders): Observable<User> {
    return this.http.get<User>(this.backendService.getBackendURL() + '/users/' + id, { headers: myHeaders });
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.backendService.getBackendURL() + '/users/email/' + email);
  }

  getPasswordByEmail(email: string, myHeaders: HttpHeaders): Observable<string>{
    return this.http.get<string>(this.backendService.getBackendURL() + '/users/password/' + email, {headers: myHeaders});
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.backendService.getBackendURL() + '/users/all');
  }

  // A credential is created with a new User inside of it.
  addUser(credential: Credential): Observable<User> {
    return this.http.post<User>(this.backendService.getBackendURL() + '/users', credential, { headers: this.headers });
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(this.backendService.getBackendURL() + '/users/' + id);
  }

  editUser(id: number, change: User, myHeaders: HttpHeaders): Observable<User> {
    return this.http.put<User>(this.backendService.getBackendURL() + '/users/' + id, change, { headers: myHeaders });
  }

  followUser(id: number, change: User, myHeaders: HttpHeaders): Observable<User> {
    return this.http.put<User>(this.backendService.getBackendURL() + '/follow/' + id, change, { headers: myHeaders });
  }
  /*
  editUser(id: number, change: User, ): Observable<User> {
    return this.http.put<User>(this.backendService.getBackendURL() + 'users/' + id, change, { headers: this.headers });
  }
  */

  changePassword(email: string): Observable<User> {
    let authToken: string = this.lServ.getLoginInfo().authToken;
    let changePWHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authToken
    });
    return this.http.post<User>(this.backendService.getBackendURL() + '/users/password', email, { headers: changePWHeaders });
  }
}
