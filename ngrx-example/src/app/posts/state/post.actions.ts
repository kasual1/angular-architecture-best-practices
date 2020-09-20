import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post.model';

export const setLoading = createAction(
  '[Posts] SetLoading',
  props<{ loading: boolean }>()
);

export const setAllPosts = createAction(
  '[Post Service] SetAllPosts',
  props<{ posts: Post[] }>()
);
