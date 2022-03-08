
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
    followers?: User[];
    following?: User[];

    constructor(userId: number,
        email: string,
        firstName: string,
        lastName: string,
        birthday: number,
        revatureJoinDate: number,
        githubUsername: string,
        title: string,
        location: string, 
        aboutMe: string,
        followers?: User[],
        following?: User[])
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
            this.followers = followers;
            this.following = following;
    }

 


}