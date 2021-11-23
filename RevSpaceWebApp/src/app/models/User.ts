
export class User {

    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    birthday:  number;
    revatureJoinDate: number;
    githubUsername: string;
    title: string;
    location: string;
    aboutMe: string;

    constructor(userId: number,
        email: string,
        firstName: string,
        lastName: string,
        birthday: number,
        revatureJoinDate: number,
        githubUsername: string,
        title: string,
<<<<<<< HEAD
        location: string, aboutMe: string,)
=======
        location: string, 
        aboutMe: string,)
>>>>>>> ce3c396 (Update function now sends put requets with authentication. Put http method expanded to include authentication.)
        {
            this.userId = userId;
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthday = birthday;
            this.revatureJoinDate = revatureJoinDate;
            this.githubUsername = githubUsername;
            this.title = title;
            this.location = location;
            this.aboutMe = aboutMe;
    }

 


}