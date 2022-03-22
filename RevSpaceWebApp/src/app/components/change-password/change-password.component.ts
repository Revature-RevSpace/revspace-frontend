import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { EditUserProfileComponent } from '../edit-user-profile/edit-user-profile.component';
import { Credential } from 'src/app/models/Credential';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  correctPass = true;
  password: String;
  cpassword: String;
  differentPasswords: String = "Passwords do not match";

  currentUser: User;
  currentCred: Credential;

  passwordForm = new FormGroup({
    email: new FormControl(''),
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
    id: new FormControl('')
  })

  constructor(private route: Router, private uServ: UserService, private lServ: LoginService) { }

  ngOnInit(): void {
    this.currentUser = this.lServ.getLoginInfo().user
  }

  public submitPassword(pass: FormGroup) {
    pass = this.passwordForm;
    this.password = pass.get("newPassword").value;
    this.cpassword = pass.get("confirmPassword").value;
    let changePasswordJSON = {
      email: this.currentUser.email,
      oldPassword: pass.get("oldPassword").value,
      newPassword: this.password,
      confirmPassword: this.cpassword,
      id: this.currentUser.userId
    }

    if (this.password === this.cpassword) {
      this.uServ.changePassword(JSON.stringify(changePasswordJSON)).subscribe(
        response => {
          this.lServ.setUserInfo(response);
          this.route.navigate(["postfeed"]);
        }
      )
    }
    else {
      this.correctPass = false;
    }
  }

}
