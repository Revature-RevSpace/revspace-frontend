import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostHttpServiceService } from 'src/app/services/post-http-service.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  

  expandThis=false;
  postInput: string;  

  constructor() { }

  ngOnInit(): void {
  }

  expand(){
    this.expandThis=true;
  }

  // onFileSelected(event){
  //   console.log(event);
  // }
 
  createPost(){
    
    alert("Add post");

    console.log(this.postInput);
  }
  
}
