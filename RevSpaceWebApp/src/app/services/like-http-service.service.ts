import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackendService } from './backend.service';
import { LoginService } from './login.service';
import { Like } from '../models/Like';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LikeHttpServiceService {

  constructor(
    private http: HttpClient, 
    private loginService: LoginService, 
    private backendService: BackendService) { }


  authToken: string = this.loginService.getLoginInfo().authToken;
  postHeaders = new HttpHeaders({ 
    'Context-Type': 'application/json',
    'Authorization': this.authToken
   });

  likePost(like:Like) : Observable<Like>{
    return this.http.post<Like>(this.backendService.getBackendURL()+ '/likes', like, {headers: this.postHeaders}).pipe(retry(1), catchError(this.errorHandl));
  }

  getAllLikes(): Observable<Array<Like>>{
    return this.http.get<Array<Like>>(this.backendService.getBackendURL()+ '/likes', {headers: this.postHeaders}).pipe(retry(1), catchError(this.errorHandl));
  }

  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    }else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
