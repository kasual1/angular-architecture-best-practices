import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UsersFacade } from '../../users.facade';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  users$: Observable<User[]>;
  loading$: Observable<boolean>;

  constructor(usersFacade: UsersFacade) {
    this.users$ = usersFacade.getUsers$();
    this.loading$ = usersFacade.getLoading$();
  }
}
