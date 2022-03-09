import { Component, OnInit, Inject, HostListener, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyPipe, DOCUMENT } from "@angular/common";
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { Like } from 'src/app/models/Like';
import { PostUtilObj } from 'src/app/models/PostUtilObj';
import { PostHttpServiceService } from 'src/app/services/post-http-service.service';
import { LikeHttpServiceService } from 'src/app/services/like-http-service.service';
import { NewPostService } from 'src/app/services/new-post.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { LiteralExpr } from '@angular/compiler';
import { NotificationsService } from 'src/app/services/notifications.service';
import { NotificationsModel } from 'src/app/models/Notifications';

@Component({
  selector: 'app-populate-feed',
  templateUrl: './populate-feed.component.html',
  styleUrls: ['./populate-feed.component.css']
})
export class PopulateFeedComponent implements OnInit, OnChanges {

  constructor(private postHttpService: PostHttpServiceService,
              private likeHttpService: LikeHttpServiceService,
              private newPostService: NewPostService,
              private loginService: LoginService,
              private notificationService:NotificationsService,
              private router:Router,
              @Inject(DOCUMENT) private document: Document) { }
  ngOnChanges(changes: SimpleChanges): void {
    let num: number = 0;
    for(let propname in changes){
      console.log("changes = " + propname);
    }
  }

  ngOnInit(): void {
    console.log("onInit");
    console.log(this.posts);
    this.posts = [];
    this.comments = [];
    this.postUtil = [];
    this.nextTen(0);
    //this.posts = this.newPostService.posts;
  }

  pclArray: Array<Array<Post>> = [];
  posts: Array<Post> = this.newPostService.posts;
  comments: Array<Post> = [];
  postUtil: Array<PostUtilObj> = this.newPostService.postUtil;
  lastLoadTime: number = 0;
  like: Like;
  allLikes: Array<Like> = [];
  stringmessage:string;
  notificationModel:NotificationsModel;
  user: User = this.loginService.getLoginInfo().user;

  /*
  postUtil is an array where each element is an object with the following attributes:
    - postId
    - number of likes
    - how much it's indented on the template
  */

  nextTen(oldestId: number){
    this.likeHttpService.getAllLikes().subscribe(data => {
      this.allLikes = data;
      this.postHttpService.getTenPosts(oldestId).subscribe(
        (response) => {
  
  
          if(response.status == 200){ //Okay
            
            this.pclArray = response.body;
            console.log(this.pclArray);
            this.populateArrays(this.pclArray);
  
  
          }else if (response.status == 204){ //No more posts to display
            
            alert("There are no more posts to display.")
  
          }else if (response.status == 400){ //Bad request
            
            alert("Something went wrong! Call IT support for help.");
          }
        }
      );
    });
  }

  populateArrays(pclArray: Array<Array<Post>>) {

    

    for (let newPost of pclArray[0]) {

      let newPostUtilObj = new PostUtilObj(newPost.postId, 0, "");

      let duplicatePosts = (this.postUtil.filter(obj => {return obj.postId == newPostUtilObj.postId}).length);

      if(duplicatePosts == 0) {
        this.postUtil.push(new PostUtilObj(newPost.postId, 0, ""));
        
        this.posts.push(newPost);
      }


      //console.log(newPost.creatorId.firstName);
    }

    console.log("ACTUAL POST")
    console.log(this.posts)

    for (let newComment of pclArray[1]) {

      this.postUtil.push(new PostUtilObj(newComment.postId, 0, ""));

      this.comments.push(newComment);
    }  

    this.calculateLikes(pclArray[2]);

  }

  calculateLikes(likesArray: Array<Post>) {
  

    for(let likePost of likesArray){

      this.getPostUtilObj(likePost).numLikes = likePost.date;
      
      // for(let like of this.allLikes){
        //like.postId.postId == likePost.postId && this.user.userId == like.userId.userId
        if( this.alreadyLiked(likePost) ){
          this.getPostUtilObj(likePost).starStyle = "fas fa-star";
        }
      // }
      if (likePost.creatorId.userId == this.user.userId) {
        
        // this.getPostUtilObj(likePost).starStyle = "fas fa-star";
        
      }
      
    }
  }

  likePost(curPost: Post) {
    if (!this.alreadyLiked(curPost)){
      // this.likeHttpService.likePost();

    this.getPostUtilObj(curPost).numLikes ++;
    this.getPostUtilObj(curPost).starStyle = "fas fa-star";
    this.like = new Like(this.loginService.getLoginInfo().user, curPost);
    this.stringmessage = this.user.firstName + " " + this.user.lastName + " has liked " + curPost.body;
    this.notificationModel = new NotificationsModel(this.stringmessage, curPost.creatorId.userId);
      console.log(this.notificationModel)
    this.notificationService.addNotifications(this.notificationModel).subscribe(
      response =>{
        console.log("worked")
      },
      error =>{
        console.log("failed")
      }
    );
    console.log(this.like);
    // console.log(this.pclArray);
    this.likeHttpService.likePost(this.like).subscribe(
      (response)=>{console.log(response)
        this.like = null;
      }
    )
      
    }
  }

  determineStarStyle(curPost: Post): string {

    //console.log(this.postUtil);

    return this.getPostUtilObj(curPost).starStyle;
  }

  alreadyLiked(curPost: Post): boolean {

    for(let like of this.allLikes){
      if(like.postId.postId == curPost.postId && this.user.userId == like.userId.userId){
        return true;
      }
    }
    //return false;

    return (this.determineStarStyle(curPost) == "fas fa-star");

  }


  getPostUtilObj(post: Post): PostUtilObj {

    return this.postUtil.filter(obj => {return obj.postId == post.postId})[0];
  }

  appendComments() {
    
    for (let comment of this.comments) {

      let parent = this.document.getElementById("attach" + comment.parentPost.postId);

      parent.appendChild(this.document.getElementById("comment" + comment.postId));
    }
  }

  getIndent(comment: Post): number {

    if (comment.parentPost.comment) {

      return 50;

    } else {

      return 0;
    }
  }

  @HostListener("window:scroll", [])
  onScroll(): void {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

      if (Date.now() - this.lastLoadTime > 1000) {

        this.nextTen(this.posts[this.posts.length - 1].postId);

        this.lastLoadTime = Date.now();
      }
    } 
  }

  submitComment(parentPost: Post) {


    let commentInput = this.document.getElementById("commentInput" + parentPost.postId);

    let commentInputElement = commentInput as HTMLInputElement;
    this.stringmessage = this.user.firstName + " " + this.user.lastName + " has commented on your post/comment " + parentPost.body;
    this.notificationModel = new NotificationsModel(this.stringmessage, parentPost.creatorId.userId);
    console.log(this.notificationModel);
    this.notificationService.addNotifications(this.notificationModel).subscribe(
      response =>{
        console.log("worked")
      },
      error =>{
        console.log("failed")
      }
    );

    let newComment = new Post(this.user, commentInputElement.value, null, 
                    new Date().getTime(), true, parentPost);

    this.postHttpService.addPost(newComment).subscribe(data =>{


      newComment.postId = data.postId;

      this.postUtil.push(new PostUtilObj(newComment.postId, 0, commentInputElement.value));

      this.comments.push(newComment);

      commentInputElement.value = "";
    });

  }

  
  navToProfile(post:Post)
  {
    this.router.navigate(['viewprofile/' + post.creatorId.userId]);
  }

  // createComment(commentId: number, parentId: number) {

  // }

  // trackByFn(index: any, item: any) {
  //   return index;
  // }

}
  




