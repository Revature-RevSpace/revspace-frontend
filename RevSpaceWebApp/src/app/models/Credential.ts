import { User } from "./User";

export class Credential{

    user: User;
    password: string;


    constructor( user: User, password: string) {
        
        this.user = user;
        this.password = password;

    }

}