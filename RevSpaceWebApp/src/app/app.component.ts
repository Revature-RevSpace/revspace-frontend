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
}
