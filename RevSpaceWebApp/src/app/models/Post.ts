import { User } from "./User"

export class Post {

    postId: number;
    creatorId: User;
    image: string;
    date: number;
    parentPost: Post


  constructor(
    postId: number, 
    creatorId: User, 
    image: string, 
    date: number, 
    parentPost: Post
) {
    this.postId = postId
    this.creatorId = creatorId
    this.image = image
    this.date = date
    this.parentPost = parentPost
  }

}