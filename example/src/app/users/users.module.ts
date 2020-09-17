import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './containers/users/users.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserItemComponent],
  imports: [SharedModule],
})
export class UsersModule {}
