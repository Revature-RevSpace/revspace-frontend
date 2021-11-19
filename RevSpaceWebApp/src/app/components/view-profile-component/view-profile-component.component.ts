import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-view-profile-component',
  templateUrl: './view-profile-component.component.html',
  styleUrls: ['./view-profile-component.component.css']
})
export class ViewProfileComponentComponent implements OnInit {

  constructor() { }

  user:User= new User(1,'email','Ryan','Schlientz',120395,2017,'https://github.com/Revature-RevSpace/revspace-application','Senior Trainer','West Virginia',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
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
