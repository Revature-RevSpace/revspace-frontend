import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';
import { SearchBarService } from 'src/app/services/search-bar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  userList: User[]=[];

  emstr = "@";
  spstr = " ";

  constructor(private sServ: SearchBarService, private lServ: LoginService, private router:Router, private uServ: UserService) { }

  ngOnInit(): void {
    this.userList = this.sServ.searchedUsers;
  }

  getUserId(user: User){
    // user = this.uServ.getUserById(user.userId);
    return user.userId;
  }

  // findAPerson(searchResult: string){
  //   if(searchResult.includes(this.emstr)){
  //     this.sServ.searchUserByEmail(searchResult).subscribe(
  //       response => {
  //         this.userList = response;
  //       }
  //     )
  //   }else if(searchResult.includes(this.spstr)){
  //     let name = searchResult.split(" ", 2);
  //     let fname = name[0];
  //     let lname = name[1];
  //     this.sServ.searchUserByName(fname, lname).subscribe(
  //       response => {
  //         this.userList = response;
  //       }
  //     )
  //   }else {
      
  //   }
  // }

}
