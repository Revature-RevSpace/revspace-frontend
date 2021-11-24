import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { PostUtilObj } from '../models/PostUtilObj';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  constructor() { }

  posts: Array<Post> = [];
  postUtil: Array<PostUtilObj> = [];
  
}
