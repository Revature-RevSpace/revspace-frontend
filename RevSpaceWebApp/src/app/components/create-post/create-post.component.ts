import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { ImageService } from 'src/app/services/image.service';
import { PostHttpServiceService } from 'src/app/services/post-http-service.service';
import { Form } from '@angular/forms';




@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private http: HttpClient, private imageService:ImageService) { }

  // User = new User();
  // post = new Post();
  // urllink:string;

  body: string;
  imgUrlLink:string;
  parentPost:Post;  
  creatorId:User;
  comment:boolean;
  date:number;

  expandThis=false;
  show=false;

  


  ngOnInit(): void {
    // this.postService.getAllPosts()
    //   .subscribe(data =>{
    //     console.log(data);
    //     this.allPosts = data;
    //   }, error=> console.log(error));

   
  }

  expand(){
    this.expandThis=true;
  }

 
  //CODE TO JUST SHOW IMAGE WHILE USER SELECTS IT
    // this.imgUrlLink = event.target.files[0].name;
    // console.log(this.imgUrlLink);

    // if(event.target.files){
    //   var reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0])
    //   reader.onload = (event:any) =>{
    //     this.urllink = event.target.result
    //     this.show=true;
    //   }
    // }
  // }

  //CODE TO BUILD POST OBJ TO SEND
  // buildObjPost() {
  //   // this.post = {
  //   //   body = this.body,
  //   //   image = this.imgFileName,
  //   //   date = this.date,
  //   //   comment = false,
  //   //   parentPost = this.parentPost,
  //   //   creatorId = this.User
  //   // }
  // }
  
 
  createPost(){
    alert("Add post");
  }
 

  //CODE FOR IMGBB
  onInput(e: Event){
    const input = e.target as HTMLInputElement;
    this.imageService.upload(input.files[0]).subscribe(url => console.log(url));
  }


 
  
 }
