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

  constructor(private http: HttpClient, private imageService:ImageService, private postService: PostHttpServiceService) { }

  body: string;
  urlLink:string;
  creatorId:User;
  comment:boolean;
  date:number;
  user: User = new User(1,'email','first','last',10000000,19,'gitur','title','NY','aboutme');
  post = new Post(this.user,'body','image',1637264203, false);

  

  //NGIFs
  expandThis=false;
  show=false;

  
  ngOnInit(): void {
    
  }

  expand(){
    this.expandThis=true;
  }

  //CODE FOR IMGBB
  onInput(e: Event){
    const input = e.target as HTMLInputElement;
    this.imageService.upload(input.files[0])
    .subscribe(url => {
      console.log(url);
      this.urlLink = url;
    });

    //CODE TO DISPLAY IMAGE AS CLICKED
    if(input.files[0]){
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0])
        reader.onload = (input:any) =>{
          this.urlLink = input.result
          this.show=true;
        }
      }
  }

  //ADDING POST
  createPost(){
    console.log(this.body);

    this.post ={
    creatorId: this.user, 
    body: this.body,
    image: this.urlLink, 
    date: new Date().getTime(), 
    comment: false,
    parentPost: null,
    postId:0
    }
    
    //CALLING ADD POST SERVICE TO SEND NEW POST
    this.postService.addPost(this.post)
   .subscribe(data =>{
     console.log(data);
    }, error=> console.log(error));

    window.location.reload();
  }
}
 
