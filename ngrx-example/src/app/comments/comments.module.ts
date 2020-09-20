import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from './containers/comments-list/comments-list.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { StoreModule } from '@ngrx/store';
import * as fromComments from './state/comment.reducers';

@NgModule({
  declarations: [CommentsListComponent, CommentItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromComments.commentsFeatureKey,
      fromComments.commentsReducer
    ),
  ],
  exports: [CommentsListComponent],
})
export class CommentsModule {}
