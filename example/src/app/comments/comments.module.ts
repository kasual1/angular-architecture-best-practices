import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from './containers/comments-list/comments-list.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';

@NgModule({
  declarations: [CommentsListComponent, CommentItemComponent],
  imports: [CommonModule],
  exports: [CommentsListComponent],
})
export class CommentsModule {}
