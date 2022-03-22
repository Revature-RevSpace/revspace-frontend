
export class User {

    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    githubUsername: string;
    title: string;
    location: string;
    aboutMe: string;
    birthday?:  number;
    revatureJoinDate?: number;
    followers?: User[];
    following?: User[];

    constructor(userId: number,
        email: string,
        firstName: string,
        lastName: string,       
        githubUsername: string,
        title: string,
        location: string, 
        aboutMe: string,
        birthday?: number,
        revatureJoinDate?: number,
        followers?: User[],
        following?: User[])
        {
            this.userId = userId;
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthday = birthday;           
            this.githubUsername = githubUsername;
            this.title = title;
            this.location = location;
            this.aboutMe = aboutMe;
            this.followers = followers;
            this.following = following;
            this.revatureJoinDate = revatureJoinDate;
    }

 


}