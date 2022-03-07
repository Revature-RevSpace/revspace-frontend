import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NotificationsModel } from "../models/Notifications";
import { BackendService } from "./backend.service";
import { LoginService } from "./login.service";



@Injectable({
    providedIn: 'root'
  })
export class NotificationsService{

    constructor(
        private backendService:BackendService,
        private loginService: LoginService, 
        private http: HttpClient
        ) { }
    
        authToken: string = this.loginService.getLoginInfo().authToken;
        postHeaders = new HttpHeaders({ 
          'Context-Type': 'application/json',
          'Authorization': this.authToken
         });


      addNotifications(notiModel: NotificationsModel): Observable<NotificationsModel> {
        return this.http.post<NotificationsModel>(this.backendService.getBackendURL() + '/notifications', notiModel , { headers: this.postHeaders });
      }

}