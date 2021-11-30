import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-leaving-edit-alert',
  templateUrl: './leaving-edit-alert.component.html',
  styleUrls: ['./leaving-edit-alert.component.css']
})
export class LeavingEditAlertComponent implements OnInit {

  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

    //Logged in user information
    currentUser: User;

  confirmLeaveUpdateProfile() {
    this.currentUser = this.loginService.getLoginInfo().user;
    this.router.navigate(["viewprofile/" + this.currentUser.userId]);
  }

}
