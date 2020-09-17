import { NgModule } from '@angular/core';
import { PostsComponent } from './containers/posts/posts.component';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { SharedModule } from '../shared/shared.module';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [PostsComponent, PostListComponent, PostItemComponent],
  imports: [SharedModule, CommentsModule],
})
export class PostsModule {}
