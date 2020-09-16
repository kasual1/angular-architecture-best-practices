import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostsFacade } from '../../posts.facade';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;
  posts: Post[];
  loading$: Observable<boolean>;

  constructor(private postsFacade: PostsFacade) {
    this.posts$ = postsFacade
      .getPosts$()
      .pipe(tap((posts) => (this.posts = posts)));
  }

  ngOnInit(): void {
    this.postsFacade.loadAllPosts();
  }
}
