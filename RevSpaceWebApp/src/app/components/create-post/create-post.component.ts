import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { ImageService } from 'src/app/services/image.service';
import { PostHttpServiceService } from 'src/app/services/post-http-service.service';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private http: HttpClient, private imageService:ImageService) { }

  // User = new User();
  // post = new Post();
  urllink:string;

  body: string;
  imgUrlLink:string;
  parentPost:Post;  
  creatorId:User;
  comment:boolean;
  date:number;

  expandThis=false;
  show=false;

  private imageFile: File;
  images:object[] = [];

  ngOnInit(): void {
    // this.postService.getAllPosts()
    //   .subscribe(data =>{
    //     console.log(data);
    //     this.allPosts = data;
    //   }, error=> console.log(error));

    // this.getAllImages();
  }

  expand(){
    this.expandThis=true;
  }

  // onFileSelected(event){
  //   console.log(event);
  //   const formdata = new FormData()
  //   formdata.append("image", event.target.files[0])

    // let headers = new Headers({'authorization': 'Client-ID 44360ac4578102b'});
    // this.http.post('https://api.imgur.com/3/image', this.imageFile, {headers: headers})

 

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

    // console.log(this.body);
  }


  // onFileSelected(imageInput:any){
  //   this.imageFile = imageInput.files[0];
  // }
 
  // addImage(){
  //   this.imageService.uploadImage(this.imageFile);
  // }

  
  // getAllImages(){
  //   this.images = this.imageService.getImages();
  // }
  
 }
