export class PostUtilObj {
    postId: number = 0;
    numLikes: number = 0;
    potentialComment: string = "";
    starStyle: string = "";

    constructor(
        postId: number, 
        numLikes: number, 
        potentialComment: string,
        starStyle: string = "far fa-star"
    ) {
        this.postId = postId
        this.numLikes = numLikes
        this.potentialComment = potentialComment
        this.starStyle = starStyle
      }
}