import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.reducers';

const postState = createFeatureSelector<PostState>('posts');

export const selectLoading = createSelector(
  postState,
  (state) => state.loading
);

export const selectAllPosts = createSelector(postState, (state) => state.posts);
