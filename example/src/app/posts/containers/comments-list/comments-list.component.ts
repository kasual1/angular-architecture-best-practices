import { Component, Input } from '@angular/core';
import { Comment } from '../../../posts/models/comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent {
  @Input()
  comments: Comment[];
}
