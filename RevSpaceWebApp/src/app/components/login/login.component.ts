import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

  username:string;
  password:string;

  login()
  {
    this.loginService.login(this.username, this.password);
  }
}
