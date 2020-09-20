import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from './user.actions';

export const usersFeatureKey = 'users';

export interface UserState {
  loading: boolean;
  users: User[];
}

export const initialState: UserState = {
  loading: false,
  users: [],
};

export const usersReducer = createReducer(
  initialState,
  on(UserActions.setLoading, (state, { loading }) => ({ ...state, loading })),
  on(UserActions.setAllUsers, (state, { users }) => ({ ...state, users }))
);
