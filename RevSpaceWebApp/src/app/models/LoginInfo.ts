import { HttpHeaders } from "@angular/common/http";
import { User } from "./User";

export class LoginInfo{

    user: User;
    authToken:string;

    constructor(user: User, authToken:string)
    {
        this.user = user;
        this.authToken = authToken;
    }

}