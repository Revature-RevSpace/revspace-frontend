import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Credential } from '../models/Credential';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({ 'Context-Type': 'application/json'});

  getUserById(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:8080/users/' + id);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>('http://localhost:8080/users/email/' + email);
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/users');
  }

  // A credential is created with a new User inside of it.
  addUser(credential: Credential): Observable<User> {
    return this.http.post<User>('http://localhost:8080/users', credential, { headers: this.headers });
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>('http://localhost:8080/users/' + id);
  }

  editUser(id: number, change: User, ): Observable<User> {
    return this.http.put<User>('http://localhost:8080/users/' + id, change, { headers: this.headers });
  }

}
