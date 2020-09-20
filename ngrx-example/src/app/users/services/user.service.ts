import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly url = `${environment.baseUrl}/users`;

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.url}/${user.id}`, user);
  }
}
