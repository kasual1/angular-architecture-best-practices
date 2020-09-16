import { NgModule } from '@angular/core';
import { PostsComponent } from './containers/posts/posts.component';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsListComponent } from './containers/comments-list/comments-list.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostListComponent,
    PostItemComponent,
    CommentsListComponent,
    CommentItemComponent,
  ],
  imports: [SharedModule],
})
export class PostsModule {}
