import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
  @Input()
  post: Post;

  @Output()
  commentsClick = new EventEmitter();

  showComments: boolean;

  onCommentsClicked(): void {
    this.showComments = !this.showComments;
    if (this.showComments) {
      this.commentsClick.emit();
    }
  }
}
