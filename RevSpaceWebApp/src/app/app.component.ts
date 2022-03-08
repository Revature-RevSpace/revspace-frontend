import { Component } from '@angular/core';
import { LoginInfo } from './models/LoginInfo';
import { LoginService } from './services/login.service';
import { User } from './models/User';
import { NewPostService } from './services/new-post.service';



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
      // User=[{}]; 
  
  /* getAllUser():string{
 let user =this.loginService.getLoginInfo().user;
 return user.firstName+" "+ user.lastName;
  } */

  /* toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
} */

}