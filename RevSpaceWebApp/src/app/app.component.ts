import { Component } from '@angular/core';
import { LoginInfo } from './models/LoginInfo';
import { LoginService } from './services/login.service';

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

