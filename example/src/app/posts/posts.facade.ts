import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../users/services/user.service';
import { UsersState } from '../users/state/users.state';
import { Post } from './models/post.model';
import { CommentService } from '../comments/services/comment.service';
import { PostService } from './services/post.service';
import { CommentsState } from '../comments/containers/comments.state';
import { PostsState } from './state/posts.state';

@Injectable({
  providedIn: 'root',
})
export class PostsFacade {
  constructor(
    private postState: PostsState,
    private commentsState: CommentsState,
    private usersState: UsersState,
    private postService: PostService,
    private commentService: CommentService,
    private userService: UserService
  ) {}

  getLoading$(): Observable<boolean> {
    return this.postState.getLoading$();
  }

  getPostsWithCommentsAndUsers$(): Observable<Post[]> {
    return combineLatest([
      this.postState.getPosts$(),
      this.commentsState.getComments$(),
      this.usersState.getUsers$(),
    ]).pipe(
      map(([posts, comments, users]) => {
        return posts.map((post) => {
          return {
            ...post,
            comments: comments.filter((comment) => comment.postId === post.id),
            user: users.find((user) => user.id === post.userId),
          };
        });
      }),
      shareReplay(1)
    );
  }

  loadPostsWithCommentsAndUsers(): void {
    this.postState.setLoading(true);
    const posts$ = this.postService.fetchPosts();
    const comments$ = this.commentService.fetchComments();
    const users$ = this.userService.fetchUsers();
    forkJoin([posts$, comments$, users$]).subscribe(
      ([posts, comments, users]) => {
        this.postState.setPosts(posts);
        this.commentsState.setComments(comments);
        this.usersState.setUsers(users);
      },
      (error) => console.error(error),
      () => this.postState.setLoading(false)
    );
  }
}
