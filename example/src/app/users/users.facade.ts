import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersState } from '../users/state/users.state';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersFacade {
  constructor(private userState: UsersState) {}

  getLoading$(): Observable<boolean> {
    return this.userState.getLoading$();
  }

  getUsers$(): Observable<User[]> {
    return this.userState.getUsers$();
  }
}
