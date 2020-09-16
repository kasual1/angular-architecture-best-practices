import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post.model';

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
}
