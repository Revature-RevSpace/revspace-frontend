import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  correctPass = true;

  passwordForm = new FormGroup({
    email: new FormControl(''),
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
    confirmPassword: new FormControl(''),
    id: new FormControl('')
  });

  /* The problem we were expirenceing with this component is the user is not yet logged in and we cant find that users password if they are not loggeed in */

  constructor(private route: Router, private uServ: UserService, private lServ: LoginService) { }

  ngOnInit(): void {
  }

  submitPassword(pass: FormGroup) {
    let password = pass.get("newPassword").value;
    let cpassword = pass.get("confirmPassword").value;

    if (password === cpassword) {
      this.uServ.changePassword(JSON.stringify(pass.value)).subscribe(
        response => {
          this.lServ.setUserInfo(response);
        }
      )
    }
    else {
      this.correctPass = false;
    }

  }


}
