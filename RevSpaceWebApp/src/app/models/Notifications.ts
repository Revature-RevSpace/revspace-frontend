import { User } from "./User";

  
export class NotificationsModel{
    constructor(public message:string,  public userReceive:number, public dateAndTime?:string, public notiId?:number){}
}