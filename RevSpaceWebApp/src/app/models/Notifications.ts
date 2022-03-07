import { User } from "./User";

  
export class NotificationsModel{
    constructor(public message:string,  public userReceiver:User, public dateAndTime?:string){}
}