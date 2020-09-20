import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { UserState } from './state/user.reducers';
import { select, Store } from '@ngrx/store';
import * as fromUserSelector from './state/user.selectors';
import { UserService } from './services/user.service';
import { setAllUsers, setLoading } from './state/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UsersFacade {
  constructor(
    private userStore: Store<UserState>,
    private userService: UserService
  ) {}

  getLoading$(): Observable<boolean> {
    return this.userStore.pipe(select(fromUserSelector.selectLoading));
  }

  getUsers$(): Observable<User[]> {
    return this.userStore.pipe(select(fromUserSelector.selectAllUsers));
  }

  loadUsers(): void {
    this.userStore.dispatch(setLoading({ loading: true }));
    this.userService.fetchUsers().subscribe(
      (users) => this.userStore.dispatch(setAllUsers({ users })),
      (error) => console.error(error),
      () => this.userStore.dispatch(setLoading({ loading: false }))
    );
  }
}
