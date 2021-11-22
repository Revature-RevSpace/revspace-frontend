import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../models/Credentials';
import { LoginInfo } from '../models/LoginInfo';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private http: HttpClient
  ) { }

  private loginInfo:LoginInfo = null;

  /**
   * Requests login validation.
   * If request is successful, saves the user's auth token and user info
   * @param credentials Credentials object containing a user object -- used to retrieve user's email and password
   */
  public login(credentials:Credentials)
  {
    const authToken:string = 'Basic ' + btoa(credentials.user.email + ":" + credentials.password);
    const myHeaders:HttpHeaders = new HttpHeaders({
      'Authorization': authToken
    });
    const request = this.http.get<User>("http://localhost:8080/login", {headers:myHeaders});
    const result = request.subscribe(
      (response)=>{
        this.loginInfo = new LoginInfo(response, authToken)
      },
      ()=>
      {
        this.loginInfo = null;
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
}
