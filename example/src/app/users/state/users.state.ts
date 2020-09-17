import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersState {
  private loading$ = new BehaviorSubject<boolean>(false);
  private users$ = new BehaviorSubject<User[]>([]);

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoading(isLoading: boolean): void {
    this.loading$.next(isLoading);
  }

  getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
  }

  setUsers(users: User[]): void {
    this.users$.next(users);
  }
}
