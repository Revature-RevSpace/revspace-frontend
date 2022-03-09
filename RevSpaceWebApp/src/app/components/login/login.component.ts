import { Component, OnInit, ViewChild } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  username:string;
  password:string;

  login()
  {
    this.loginService.login(this.username, this.password);
  }

  /**
   * @returns whether the most recent login attempt was invalid (false if no login attempt this session)
   */
  isLoginInvalid():boolean
  {
    return this.loginService.isLoginInvalid();
  }
}
