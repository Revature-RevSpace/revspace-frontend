import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



  }

  posts: Array<Post> = [];
  comments: Array<Post> = [];
  postUtil: Array<Object> = [];
  user: User = new User();

  /*
  postUtil is an array where each element is an object with the following attributes:
    - postId
    - number of likes
    - how much it's indented on the template
  */

  
  calculateLikes() {

  }

  createComment(commentId: number, parentId: number) {

  }




}
