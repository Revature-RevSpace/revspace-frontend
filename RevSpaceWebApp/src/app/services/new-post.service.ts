import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  constructor() { }

  posts: Array<Post> = [];
  
}
