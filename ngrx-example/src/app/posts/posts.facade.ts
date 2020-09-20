import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';
import { select, Store } from '@ngrx/store';
import { setAllPosts, setLoading } from './state/post.actions';
import { PostState } from './state/post.reducers';
import { selectAllPosts, selectLoading } from './state/post.selectors';
import { selectAllUsers } from '../users/state/user.selectors';
import { UserState } from '../users/state/user.reducers';
import { CommentState } from '../comments/state/comment.reducers';
import { selectAllComments } from '../comments/state/comment.selectors';

@Injectable({
  providedIn: 'root',
})
export class PostsFacade {
  constructor(
    private postService: PostService,
    private postStore: Store<PostState>,
    private userStore: Store<UserState>,
    private commentStore: Store<CommentState>
  ) {}

  getLoading$(): Observable<boolean> {
    return this.postStore.pipe(select(selectLoading));
  }

  getPostsWithCommentsAndUsers$(): Observable<Post[]> {
    return combineLatest([
      this.postStore.pipe(select(selectAllPosts)),
      this.commentStore.pipe(select(selectAllComments)),
      this.userStore.pipe(select(selectAllUsers)),
    ]).pipe(
      map(([posts, comments, users]) => {
        return posts.map((post) => {
          return {
            ...post,
            comments: comments.filter((comment) => comment.postId === post.id),
            user: users.find((user) => user.id === post.userId),
          };
        });
      })
    );
  }

  loadPosts(): void {
    this.postStore.dispatch(setLoading({ loading: true }));
    this.postService.fetchPosts().subscribe(
      (posts) => this.postStore.dispatch(setAllPosts({ posts })),
      (error) => console.error(error),
      () => this.postStore.dispatch(setLoading({ loading: false }))
    );
  }
}
