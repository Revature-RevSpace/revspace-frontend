import { User } from "./User"
import { Post } from "./Post"

export class Like {

    likeId: number;
    userId: User;
    postId: Post;
    

  constructor(likeId: number, userId: User, postId: Post) {
    this.likeId = likeId
    this.userId = userId
    this.postId = postId
  }


}