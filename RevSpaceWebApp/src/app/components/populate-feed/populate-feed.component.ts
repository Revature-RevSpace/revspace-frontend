import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { Like } from 'src/app/models/Like';
import { PostUtilObj } from 'src/app/models/PostUtilObj';
import { PostHttpServiceService } from 'src/app/services/post-http-service.service';
import { LikeHttpServiceService } from 'src/app/services/like-http-service.service';

@Component({
  selector: 'app-populate-feed',
  templateUrl: './populate-feed.component.html',
  styleUrls: ['./populate-feed.component.css']
})
export class PopulateFeedComponent implements OnInit {

  constructor(private postHttpService: PostHttpServiceService,
              private likeHttpService: LikeHttpServiceService) { }

  ngOnInit(): void {
    this.nextTen(0);
  }

  pclArray: Array<Array<Post>> = [];
  posts: Array<Post> = [];
  comments: Array<Post> = [];
  postUtil: Array<PostUtilObj> = [];
  

  user: User = new User(1,"abc@abc.com","firstname","lastname", 1637264203, 163700000, "gitName", "title", "location", "aboutme");

  /*
  postUtil is an array where each element is an object with the following attributes:
    - postId
    - number of likes
    - how much it's indented on the template
  */

  nextTen(oldestId: number){

    this.postHttpService.getTenPosts(oldestId).subscribe(
      (response) => {

        console.log(response);

        if(response.status === 200){ //Okay
          
          this.populateArrays(response);

        }else if (response.status === 204){ //No more posts to display
          
          alert("There are no more posts to display.")

        }else if (response.status === 400){ //Bad request
          
          alert("Something went wrong! Call IT support for help.");
        }
      }
    );
  }

  populateArrays(pclArray: Array<Array<Post>>) {

    for (let newPost of this.pclArray[0]) {

      this.posts.push(newPost);
    }

    for (let newComment of this.pclArray[1]) {

      this.comments.push(newComment);
    }
    
    this.calculateLikes(this.pclArray[2]);
  }

  calculateLikes(likesArray: Array<Post>) {

    for(let likePost of likesArray){

      let postUtilObj = new PostUtilObj(likePost.postId, likePost.date, 0);

      if (likePost.creatorId.userId == this.user.userId) {
        
        postUtilObj.starStyle = "fas fa-star";
      }

      this.postUtil.push(postUtilObj);
    }
  }

  likePost(curPost: Post) {

    this.likeHttpService.likePost();

    this.postUtil.filter(obj => {return obj.postId == curPost.postId})[0].numLikes ++;
    this.postUtil.filter(obj => {return obj.postId == curPost.postId})[0].starStyle = "fas fa-star";
  }

  determineStarStyle(curPost: Post): string {

    return this.postUtil.filter(obj => {return obj.postId == curPost.postId})[0].starStyle;
  }

  alreadyLiked(curPost: Post): boolean {

    return (this.determineStarStyle(curPost) == "fas fa-star");
  }

  // createComment(commentId: number, parentId: number) {

  // }

}


