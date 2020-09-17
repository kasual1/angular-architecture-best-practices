import { Component, OnInit } from '@angular/core';
import { PostsFacade } from './posts/posts.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'example';
  constructor(private postsFacade: PostsFacade) {}

  ngOnInit(): void {
    this.postsFacade.loadPostsWithCommentsAndUsers();
  }
}
