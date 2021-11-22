export class PostUtilObj {
    postId: number = 0;
    numLikes: number = 0;
    indent: number = 0;
    starStyle: string = "";

    constructor(
        postId: number, 
        numLikes: number, 
        indent: number,
        starStyle: string = "far fa-star"
    ) {
        this.postId = postId
        this.numLikes = numLikes
        this.indent = indent
        this.starStyle = starStyle
      }
}