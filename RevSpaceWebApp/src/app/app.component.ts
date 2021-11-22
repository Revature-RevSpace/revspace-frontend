import { Component } from '@angular/core';
import { LoginInfo } from './models/LoginInfo';
<<<<<<< HEAD
import { LoginService } from './services/login.service';

=======
import { User } from './models/User';
import { LoginServiceService } from './services/login-service.service';
>>>>>>> b70232cd2a0924fb081d4fa42508ede19d3f50f4


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RevSpaceWebApp';
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
  }
}

