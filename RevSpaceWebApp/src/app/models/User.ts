
export class User {

    userId: number;
    email: string;
    firstname: string;
    lastname: string;
    birthday:  number;
    revatureJoinDate: number;
    githubUsername: string;
    title: string;
    location: string;
    aboutme: string;

    constructor(userId: number,
        email: string,
        firstname: string,
        lastname: string,
        birthday: number,
        revatureJoinDate: number,
        githubUsername: string,
        title: string,
        location: string, aboutme: string,)
        {
            this.userId = userId;
            this.email = email;
            this.firstname = firstname;
            this.lastname = lastname;
            this.birthday = birthday;
            this.revatureJoinDate = revatureJoinDate;
            this.githubUsername = githubUsername;
            this.title = title;
            this.location = location;
            this.aboutme = aboutme;
    }


}