import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const setLoading = createAction(
  '[User Component] SetLoading',
  props<{ loading: boolean }>()
);

export const setAllUsers = createAction(
  '[User Component] SetAllUsers',
  props<{ users: User[] }>()
);
