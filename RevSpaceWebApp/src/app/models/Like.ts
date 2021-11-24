import { User } from "./User"
import { Post } from "./Post"

export class Like {

    likeId: number;
    userId: User;
    postId: Post;
    

  constructor(userId: User, postId: Post, likeId?: number) {
    this.likeId = likeId
    this.userId = userId
    this.postId = postId
  }


}