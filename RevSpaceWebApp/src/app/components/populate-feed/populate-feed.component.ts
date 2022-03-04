import { Component, OnInit, Inject, HostListener, ChangeDetectorRef } from '@angular/core';
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

@Component({
  selector: 'app-populate-feed',
  templateUrl: './populate-feed.component.html',
  styleUrls: ['./populate-feed.component.css']
})
export class PopulateFeedComponent implements OnInit {

  constructor(private postHttpService: PostHttpServiceService,
              private likeHttpService: LikeHttpServiceService,
              private newPostService: NewPostService,
              private loginService: LoginService,
              private router:Router,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

    // this.posts = [];
    // this.comments = [];
    // this.postUtil = [];
    this.nextTen(0);
  }

  pclArray: Array<Array<Post>> = [];
  posts: Array<Post> = this.newPostService.posts;
  comments: Array<Post> = [];
  postUtil: Array<PostUtilObj> = this.newPostService.postUtil;
  lastLoadTime: number = 0;
  like: Like;
  allLikes: Array<Like>;
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

    

    for (let newPost of this.pclArray[0]) {

      let newPostUtilObj = new PostUtilObj(newPost.postId, 0, "");

      let duplicatePosts = (this.postUtil.filter(obj => {return obj.postId == newPostUtilObj.postId}).length);

      if(duplicatePosts == 0) {
        this.postUtil.push(new PostUtilObj(newPost.postId, 0, ""));

        this.posts.push(newPost);
      }

      //console.log(newPost.creatorId.firstName);
    }

    for (let newComment of this.pclArray[1]) {

      this.postUtil.push(new PostUtilObj(newComment.postId, 0, ""));

      this.comments.push(newComment);
    }  

    this.calculateLikes(this.pclArray[2]);

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
      console.log(this.postUtil);
    }
  }

  likePost(curPost: Post) {

    if (!this.alreadyLiked(curPost)){

      // this.likeHttpService.likePost();

    this.getPostUtilObj(curPost).numLikes ++;
    this.getPostUtilObj(curPost).starStyle = "fas fa-star";
    this.like = new Like(this.loginService.getLoginInfo().user, curPost);
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
    return false;

    // return (this.determineStarStyle(curPost) == "fas fa-star");

  }


  getPostUtilObj(post: Post): PostUtilObj {

    return this.postUtil.filter(obj => {return obj.postId == post.postId})[0]
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

    console.log(this.getPostUtilObj(parentPost).potentialComment);

    let commentInput = this.document.getElementById("commentInput" + parentPost.postId);

    let commentInputElement = commentInput as HTMLInputElement;

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
  




