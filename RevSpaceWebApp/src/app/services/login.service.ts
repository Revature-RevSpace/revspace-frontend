import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../models/Credentials';
import { LoginInfo } from '../models/LoginInfo';
import { User } from '../models/User';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private backendService:BackendService,
    private http: HttpClient,
    private router:Router
  ) { }

  private loginInfo:LoginInfo = null;
  private invalidLogin = false;

  /**
   * Requests login validation.
   * If request is successful, saves the user's auth token and user info
   * @param username username
   * @param password password
   */
  public login(username:string, password:string)
  {
    const authToken:string = 'Basic ' + btoa(username + ":" + password);
    const myHeaders:HttpHeaders = new HttpHeaders({
      'Authorization': authToken
    });
    const request = this.http.get<User>(this.backendService.getBackendURL() + "/login", {headers:myHeaders});
    const result = request.subscribe(
      (response)=>{
        this.loginInfo = new LoginInfo(response, authToken);
        this.invalidLogin = false;
        this.router.navigate(['postfeed']);
      },
      ()=>
      {
        this.loginInfo = null;
        this.invalidLogin = true;
        this.router.navigate(['']);
      }
    )
  }

  /**
   * @returns Login info for currently logged-in user (contains user info and reusable auth token).
   * Returns null if user is not logged in.
   */
  public getLoginInfo()
  {
    return this.loginInfo;
  }

  /**
   * @returns true if the most recent login attempt was invalid, false otherwise
   * (false if no login attemps yet in this session)
   */
  public isLoginInvalid()
  {
    return this.invalidLogin;
  }

  /**
   * Sets the stored user object in loginInfo to the passed user object
   * Does not change the authtoken
   */
  public setUserInfo(user: User) {
    let authToken = this.loginInfo.authToken;
    this.loginInfo = new LoginInfo(user, authToken);
  }

}
