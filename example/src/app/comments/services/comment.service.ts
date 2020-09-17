import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  readonly url = `${environment.baseUrl}/comments`;

  constructor(private http: HttpClient) {}

  fetchComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url);
  }

  fetchCommentsByPostId(postId: number): Observable<Comment[]> {
    let params = new HttpParams();
    params = params.append('postId', postId.toString());
    return this.http.get<Comment[]>(this.url, { params });
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.url, comment);
  }

  updateComment(comment: Comment): Observable<Comment> {
    return this.http.patch<Comment>(`${this.url}/${comment.id}`, comment);
  }
}
