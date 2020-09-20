import { createAction, props } from '@ngrx/store';
import { Comment } from '../models/comment.model';

export const setLoading = createAction(
  '[Comments] SetLoading',
  props<{ loading: boolean }>()
);

export const setAllComments = createAction(
  '[Comment Service] SetAllComments',
  props<{ comments: Comment[] }>()
);
