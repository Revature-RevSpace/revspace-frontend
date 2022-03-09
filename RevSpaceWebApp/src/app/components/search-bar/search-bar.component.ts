import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import{Router,NavigationExtras} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SearchBarService } from 'src/app/services/search-bar.service';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchText:string;

  userlist: User[] = [];

  result: User[] = [];

  emstr = "@";
  spstr = " ";

  constructor(private router:Router, private sServ: SearchBarService, private uServ: UserService) {}
  ngOnInit(): void {
    // this.uServ.getAllUsers().subscribe(
    //   response => {
    //     console.log(response);
    //     this.userlist = response;
    //   }
    // )
  }

  // getAllUser(result:any){
  //   const navigationExtras :NavigationExtras={
  //     queryParams:{
  //       result: JSON.stringify(result)
  //     }
  //   }
  //   this.router.navigate(['search-details'], navigationExtras);
  // }

  // searchEmail(email: string){
  //   this.actRoute.queryParams.subscribe(data =>{
  //     email = data.email;
  //     console.log(data);
  //   });
  // }

  searchUsers(){
    if(this.searchText.includes(this.emstr)){
      this.sServ.searchUserByEmail(this.searchText).subscribe(
        response => {
          this.result = response;
          this.sServ.searchedUsers = response;
          this.router.navigate(['search-details']);
          this.searchText = "";
        }
      )
    }else if(this.searchText.includes(this.spstr)){
      let name = this.searchText.split(" ", 2);
      let fname = name[0];
      let lname = name[1];
      this.sServ.searchUserByName(fname, lname).subscribe(
        response => {
          this.result = response;
          this.sServ.searchedUsers = response;
          this.router.navigate(['search-details']);
          this.searchText = "";
        }
      )
    }else {
      
    }
  }

}

