import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from "../post.model";
import { Comment } from "../comment.model"
import { Observable } from 'rxjs';
import { NewPost } from '../newPost.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient){}
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfComments: Comment[] = []
  listOfPosts: Post[] = [
  ];
  public pageSlice = this.listOfPosts.slice(0,3);
  getPosts(){
    return this.listOfPosts
  }
  setPosts(listOfPosts: Post[]){
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts)
  }
  getComments(index: string): Observable<Comment[]>{
   return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${index}/comments`)

  }
  postPost(post: NewPost){
    return this.http.post<Post>(`https://jsonplaceholder.typicode.com/posts`, post)
  }
}
