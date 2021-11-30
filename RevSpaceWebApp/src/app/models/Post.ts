import { User } from "./User"

export class Post {

    postId: number;
    creatorId: User;
    body: string;
    image: string;
    date: number;
    comment: boolean;
    parentPost: Post;


  constructor(
    creatorId: User, 
    body: string,
    image: string, 
    date: number, 
    comment: boolean,
    parentPost?: Post,
    postId?: number
) {
    this.postId = postId
    this.creatorId = creatorId
    this.body = body
    this.image = image
    this.date = date
    this.comment = comment
    this.parentPost = parentPost
  }

}