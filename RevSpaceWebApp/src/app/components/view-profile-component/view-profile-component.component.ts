import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-view-profile-component',
  templateUrl: './view-profile-component.component.html',
  styleUrls: ['./view-profile-component.component.css']
})
export class ViewProfileComponentComponent implements OnInit {

  constructor() { }

  user:User= new User(1,'email','first','last',10000000,19,'gitur','title','NY','about');
  realUser: User;

  ngOnInit(): void {
    // here will load the user, so load user and assigned user
    // here will also fill the user with data to be displayed
  }

  load():void{
    this.user.firstname='test';

  }
  // getUser(): User{
    
  // }

}
