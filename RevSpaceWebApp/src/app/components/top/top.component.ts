import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})


export class TopComponent implements OnInit {
  windowScrolled: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  ngOnInit(): void {
  }


  @HostListener("window:scroll", [])
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        } 
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        window.scrollTo(0,0);
    }
}
