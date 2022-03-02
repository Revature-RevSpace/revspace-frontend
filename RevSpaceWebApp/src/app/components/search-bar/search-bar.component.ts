import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchText:FormControl;
  
  User=[{}];

  constructor() {  
  }
  ngOnInit(): void {
    
  }

}
