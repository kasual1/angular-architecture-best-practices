import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsState {
  private loading$ = new BehaviorSubject<boolean>(false);
  private comments$ = new BehaviorSubject<Comment[]>([]);

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoading(isLoading: boolean): void {
    this.loading$.next(isLoading);
  }

  getComments$(): Observable<Comment[]> {
    return this.comments$.asObservable();
  }

  setComments(comments: Comment[]): void {
    this.comments$.next(comments);
  }
}
