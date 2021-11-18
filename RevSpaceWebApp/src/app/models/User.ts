
export class User {
<<<<<<< HEAD

    userId: number;
    email: string;
    firstname: string;
    lastname: string;
    birthday:  number;
=======
    userId: number;
    email: string;
    name: string;
    birthday: number;
>>>>>>> 825637c (add bootstrap things)
    revatureJoinDate: number;
    githubUsername: string;
    title: string;
    location: string;
<<<<<<< HEAD
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

=======
    aboutMe: string;

    constructor(
    userId: number,
    email: string,
    name: string,
    birthday: number,
    revatureJoinDate: number,
    githubUsername: string,
    title: string,
    location: string,
    aboutMe: string,

    )
    {
        this.userId = userId;
        this.email = email;
        this.name = name;
        this.birthday = birthday;
        this.revatureJoinDate = revatureJoinDate;
        this.githubUsername = githubUsername;
        this.title = title;
        this.location = location;
        this.aboutMe = aboutMe;
        


    }

    
>>>>>>> 825637c (add bootstrap things)

}