import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostHttpServiceService {

  constructor(private http: HttpClient) { }

  // authToken: string = "Basic " + btoa(user.email + password);
  authToken: string = "a";
  private authHeaders = new HttpHeaders({ 'Context-Type': 'application/json', 'Authorization': this.authToken});

  getTenPosts(oldestId: number): Observable<any>{
    return this.http.get(`http://localhost:8080/posts/${oldestId}`, {headers: this.authHeaders});
  }

  

}
