import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';
import { PostsState } from './state/posts.state';

@Injectable({
  providedIn: 'root',
})
export class PostsFacade {
  constructor(
    private postService: PostService,
    private postState: PostsState
  ) {}

  getLoading$(): Observable<boolean> {
    return this.postState.getLoading$();
  }

  getPosts$(): Observable<Post[]> {
    return this.postState.getPosts$();
  }

  loadAllPosts(): void {
    this.postState.setLoading(true);
    this.postService.fetchPosts().subscribe(
      (posts) => this.postState.setPosts(posts),
      (error) => console.error(error),
      () => this.postState.setLoading(false)
    );
  }
}
