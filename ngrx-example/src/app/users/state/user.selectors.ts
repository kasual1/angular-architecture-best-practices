import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducers';

const userState = createFeatureSelector<UserState>('users');

export const selectLoading = createSelector(
  userState,
  (state) => state.loading
);

export const selectAllUsers = createSelector(userState, (state) => state.users);
