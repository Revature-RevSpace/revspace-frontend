import { User } from "./User"

export class Post {

    postId: number;
    creatorId: User;
    image: string;
    date: number;
    parentPost: Post
    body:string;


  constructor(
    image: string, 
    date: number, 
    parentPost: Post,
    postId:number,
    creatorId: User
) {
    this.postId = postId
    this.creatorId = creatorId
    this.image = image
    this.date = date
    this.parentPost = parentPost
  }

}