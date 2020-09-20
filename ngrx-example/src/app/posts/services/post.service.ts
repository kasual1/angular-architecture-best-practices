import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly url = `${environment.baseUrl}/posts`;

  constructor(private http: HttpClient) {}

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.patch<Post>(`${this.url}/${post.id}`, post);
  }
}
