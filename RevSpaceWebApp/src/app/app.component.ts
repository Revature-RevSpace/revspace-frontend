import { Component } from '@angular/core';
import { LoginServiceService } from './services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RevSpaceWebApp';
  constructor (private loginUser: LoginServiceService){
    
  }
  userLoggedIn(){
    console.log(this.loginUser.getLoginInfo());
    return this.loginUser.getLoginInfo();
  }
}

