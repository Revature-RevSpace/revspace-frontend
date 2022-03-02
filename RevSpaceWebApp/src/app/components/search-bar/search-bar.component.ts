import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // searchEmail(email: string){
  //   this.actRoute.queryParams.subscribe(data =>{
  //     email = data.email;
  //     console.log(data);
  //   });
  // }

}
