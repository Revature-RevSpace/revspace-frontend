import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostHttpServiceService {

  constructor(private http: HttpClient) { }

  authToken: string = "Basic " + btoa("username1@email.com:Password1");

  //authToken: string = "Basic " + btoa(user.email + user.password);

  
  private authHeaders = new HttpHeaders({ 'Context-Type': 'application/json', 'Authorization': this.authToken});

  getTenPosts(oldestId: number): Observable<any>{

    let oldestIdString: string = "" + oldestId;

    let authHeadersTen = new HttpHeaders({ 'Context-Type': 'application/json', 'Authorization': this.authToken, 'lastPostIdOnThePage': oldestIdString});

    return this.http.get(`http://localhost:8080/posts`, {headers: authHeadersTen, observe:'response'});
  }

  

}
