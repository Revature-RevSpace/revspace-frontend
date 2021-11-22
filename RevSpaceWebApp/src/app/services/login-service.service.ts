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

  public getLoginInfo()
  {
    return this.loginInfo;
  }
}
