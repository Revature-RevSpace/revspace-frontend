import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { LoginInfo } from './models/LoginInfo';
import { LoginService } from './services/login.service';
import { User } from './models/User';
import { NewPostService } from './services/new-post.service';
import { NotificationsService } from './services/notifications.service';
import { NotificationsModel } from './models/Notifications';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'RevSpaceWebApp';
  notificationsList: NotificationsModel[] = [];
  constructor(private loginService: LoginService, private notiService: NotificationsService, private router: Router) { }
  ngAfterViewChecked(): void {
    if (this.router.url != "/") {
      this.getNotification();
    }
  }
  isLoggedIn() {
    return (this.loginService.getLoginInfo() != null);
  }
  getUserName(): string {
    let user = this.loginService.getLoginInfo().user;
    return user.firstName + " " + user.lastName;
  }
  getUserId() {
    let user = this.loginService.getLoginInfo().user;
    return user.userId;
  }

  getNotification() {
    let user = this.loginService.getLoginInfo().user;
    let id = user.userId;
    this.notiService.getNotifications(JSON.stringify(id)).subscribe(
      response => {
        if (response != null){
        this.notificationsList = response;
        let no = this.notificationsList;
        console.log(no)
      }
      },
      error => {
        console.log("failed");
      }
    )
  }
}

