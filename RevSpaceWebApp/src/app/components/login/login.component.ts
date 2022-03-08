import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

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
