import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './containers/users/users.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { StoreModule } from '@ngrx/store';
import { usersFeatureKey, usersReducer } from './state/user.reducers';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserItemComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
  ],
})
export class UsersModule {}
