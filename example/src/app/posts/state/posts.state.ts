import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class PostsState {
  private loading$ = new BehaviorSubject<boolean>(false);
  private posts$ = new BehaviorSubject<Post[]>([]);

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoading(isLoading: boolean): void {
    this.loading$.next(isLoading);
  }

  getPosts$(): Observable<Post[]> {
    return this.posts$.asObservable();
  }

  setPosts(posts: Post[]): void {
    this.posts$.next(posts);
  }

  updateCommentsByPostId(postId: number, comments: Comment[]): void {
    const posts = this.posts$.getValue();
    const index = posts.findIndex((p) => (p.id = postId));
    posts[index].comments = comments;
    this.posts$.next([...posts]);
  }
}
