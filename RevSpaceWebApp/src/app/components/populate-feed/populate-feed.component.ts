import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { Like } from 'src/app/models/Like';
import { PostUtilObj } from 'src/app/models/PostUtilObj';
import { PostHttpServiceService } from 'src/app/services/post-http-service.service';

@Component({
  selector: 'app-populate-feed',
  templateUrl: './populate-feed.component.html',
  styleUrls: ['./populate-feed.component.css']
})
export class PopulateFeedComponent implements OnInit {

  constructor(private postHttpService: PostHttpServiceService) { }

  ngOnInit(): void {
    this.postHttpService.getTenPosts(0);
  }

  posts: Array<Post> = [];
  comments: Array<Post> = [];
  postUtil: Array<PostUtilObj> = [];
  pclArray: Array<any> = [];
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
        this.pclArray = response;
      }
    );
    this.posts.push(this.pclArray[0]);
    this.comments.push(this.pclArray[1]);
    this.calculateLikes(this.pclArray[2]);
  }

  

  
  calculateLikes(likesArray: Array<any>) {

    for(let i of this.posts){
      this.postUtil.push(new PostUtilObj(i.postId, 0, 0));
    }
    for(let i of this.comments){
      this.postUtil.push(new PostUtilObj(i.postId, 0, 0));
    }

    for(let likeObj of likesArray){
      for(let postUtilObj of this.postUtil){
        if(likeObj.postId == postUtilObj.postId){
          postUtilObj.numLikes++;
        }
      }
    }
  }


  // createComment(commentId: number, parentId: number) {

  // }

}
