import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostsFacade } from '../../posts.facade';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent  {
  posts$: Observable<Post[]>;
  loading$: Observable<boolean>;

  constructor(private postsFacade: PostsFacade) {
    this.posts$ = postsFacade.getPostsWithCommentsAndUsers$();
    this.loading$ = postsFacade.getLoading$();
  }

}
