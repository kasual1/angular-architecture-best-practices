import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './models/comment.model';
import { CommentState } from './state/comment.reducers';
import { select, Store } from '@ngrx/store';
import * as fromCommentSelector from './state/comment.selectors';
import { CommentService } from './services/comment.service';
import { setAllComments, setLoading } from './state/comment.actions';

@Injectable({
  providedIn: 'root',
})
export class CommentsFacade {
  constructor(
    private commentStore: Store<CommentState>,
    private commentService: CommentService
  ) {}

  getLoading$(): Observable<boolean> {
    return this.commentStore.pipe(select(fromCommentSelector.selectLoading));
  }

  getComments$(): Observable<Comment[]> {
    return this.commentStore.pipe(select(fromCommentSelector.selectAllComments));
  }

  loadComments(): void {
    this.commentStore.dispatch(setLoading({ loading: true }));
    this.commentService.fetchComments().subscribe(
      (comments) => this.commentStore.dispatch(setAllComments({ comments })),
      (error) => console.error(error),
      () => this.commentStore.dispatch(setLoading({ loading: false }))
    );
  }
}
