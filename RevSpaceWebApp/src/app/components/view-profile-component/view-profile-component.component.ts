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
    // firstname1:String;
    // user:User;


  ngOnInit(): void {

  }

  load():void{
    this.user.firstname='test';
  //  this.user.firstname="test";

  }
}
