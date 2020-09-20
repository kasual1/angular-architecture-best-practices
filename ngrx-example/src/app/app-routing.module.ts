import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/containers/posts/posts.component';
import { UsersComponent } from './users/containers/users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
