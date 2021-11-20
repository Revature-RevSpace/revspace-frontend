export class PostUtilObj {
    postId: number = 0;
    numLikes: number = 0;
    indent: number = 0;

    constructor(
        postId: number, 
        numLikes: number, 
        indent: number
    ) {
        this.postId = postId
        this.numLikes = numLikes
        this.indent = indent
      }
}