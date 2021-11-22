export class PostUtilObj {
    postId: number = 0;
    numLikes: number = 0;
    indent: number = 0;
<<<<<<< HEAD
=======
    starStyle: string = "";
>>>>>>> 9a8ff143625bc4c629e607bb2ec5e8b106397706

    constructor(
        postId: number, 
        numLikes: number, 
<<<<<<< HEAD
        indent: number
=======
        indent: number,
        starStyle: string = "far fa-star"
>>>>>>> 9a8ff143625bc4c629e607bb2ec5e8b106397706
    ) {
        this.postId = postId
        this.numLikes = numLikes
        this.indent = indent
<<<<<<< HEAD
=======
        this.starStyle = starStyle
>>>>>>> 9a8ff143625bc4c629e607bb2ec5e8b106397706
      }
}