import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/login.service';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  userList: User[]=[];

  emstr = "@";
  spstr = " ";

  constructor(private sServ: SearchBarService, private lServ: LoginService) { }

  ngOnInit(): void {
    
  }

  findAPerson(searchResult: string){
    if(searchResult.includes(this.emstr)){
      this.sServ.searchUserByEmail(searchResult).subscribe()
    }else if(searchResult.includes(this.spstr)){
      let name = searchResult.split(" ", 2);
      // let fname = name.findIndex(0)
      // this.sServ.searchUserByName(name, name.indexOf(1)).subscribe()
    }else{

      // this.sServ.searchUserByName(searchResult).subscribe()
    }
  }

}
