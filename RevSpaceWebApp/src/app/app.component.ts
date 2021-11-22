import { Component } from '@angular/core';
import { LoginInfo } from './models/LoginInfo';
import { LoginServiceService } from './services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RevSpaceWebApp';
  constructor(private loginService:LoginServiceService){}
  isLoggedIn()
  {
    return(this.loginService.getLoginInfo() != null);
  }
}

