import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {LoginService} from './login.service';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class PostHttpServiceService {


  constructor(
    private http: HttpClient, 
    private loginService: LoginService, 
    private backendService: BackendService) { }



  authToken: string = this.loginService.getLoginInfo().authToken;
  postHeaders = new HttpHeaders({ 
    'Context-Type': 'application/json',
    'Authorization': this.authToken
   });

  getTenPosts(oldestId: number): Observable<any>{

    let oldestIdString: string = "" + oldestId;

    let authHeadersTen = new HttpHeaders({ 'Context-Type': 'application/json', 'Authorization': this.authToken, 'lastPostIdOnThePage': oldestIdString});

    return this.http.get<any>(this.backendService.getBackendURL() + `/full/posts/` + this.loginService.getLoginInfo().user.userId, {headers: authHeadersTen, observe:'response'});
  }


   addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.backendService.getBackendURL() + `/posts`, post, { headers: this.postHeaders  }).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(this.backendService.getBackendURL() + `/posts/` + id).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }


 
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(this.backendService.getBackendURL() + `/posts`, JSON.stringify(post),{ headers: this.postHeaders }).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  deletePost(id: number): Observable<Post[]> {
    return this.http.delete<Post[]>(this.backendService.getBackendURL() + `/posts/` + id,{ headers: this.postHeaders }).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
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
