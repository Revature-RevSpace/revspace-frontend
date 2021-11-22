import { Component } from '@angular/core';
<<<<<<< HEAD
import { LoginInfo } from './models/LoginInfo';
import { LoginService } from './services/login.service';

=======
import { LoginServiceService } from './services/login-service.service';
>>>>>>> b2b7b24 (changed css html)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RevSpaceWebApp';
<<<<<<< HEAD
  constructor(private loginService:LoginService){}
  isLoggedIn()
  {
    return(this.loginService.getLoginInfo() != null);
  }
  getUserName():string{
    let user = this.loginService.getLoginInfo().user;
    return user.firstName + " " + user.lastName;
  }
  getUserId(){
    let user = this.loginService.getLoginInfo().user;
    return user.userId;
=======
  constructor (private loginUser: LoginServiceService){
    
  }
  userLoggedIn(){
    console.log(this.loginUser.getLoginInfo());
    return this.loginUser.getLoginInfo();
>>>>>>> b2b7b24 (changed css html)
  }
}

