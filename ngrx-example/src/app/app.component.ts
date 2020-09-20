import { Component, OnInit } from '@angular/core';
import { CommentsFacade } from './comments/comments.facade';
import { PostsFacade } from './posts/posts.facade';
import { UsersFacade } from './users/users.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private postsFacade: PostsFacade,
    private commentsFacade: CommentsFacade,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.postsFacade.loadPosts();
    this.commentsFacade.loadComments();
    this.usersFacade.loadUsers();
  }
}
