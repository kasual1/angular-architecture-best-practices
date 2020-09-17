import { Injectable } from '@angular/core';
import { forkJoin, from, Observable } from 'rxjs';
import { concatMap, map, switchMap, toArray } from 'rxjs/operators';
import { Post } from './models/post.model';
import { CommentService } from './services/comment.service';
import { PostService } from './services/post.service';
import { PostsState } from './state/posts.state';

@Injectable({
  providedIn: 'root',
})
export class PostsFacade {
  constructor(
    private postState: PostsState,
    private postService: PostService,
    private commentService: CommentService
  ) {}

  getLoading$(): Observable<boolean> {
    return this.postState.getLoading$();
  }

  getPosts$(): Observable<Post[]> {
    return this.postState.getPosts$();
  }

  loadAllPostsWithComments(): void {
    this.postState.setLoading(true);
    const posts$ = this.postService.fetchPosts();
    const comments$ = posts$.pipe(
      switchMap((posts) => from(posts)),
      concatMap((post) => this.commentService.fetchCommentsByPostId(post.id)),
      toArray()
    );
    forkJoin([posts$, comments$])
      .pipe(
        map(([posts, comments]) =>
          posts.map((post, index) => {
            return {
              ...post,
              comments: comments[index],
            };
          })
        )
      )
      .subscribe(
        (posts) => this.postState.setPosts(posts),
        (error) => console.error(error),
        () => this.postState.setLoading(false)
      );
  }

  loadCommentsByPostId(postId: number): void {
    this.commentService.fetchCommentsByPostId(postId).subscribe(
      (comments) => this.postState.updateCommentsByPostId(postId, comments),
      (error) => console.error(error)
    );
  }
}
