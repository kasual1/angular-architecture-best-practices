import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentState } from './comment.reducers';

const commentState = createFeatureSelector<CommentState>('comments');

export const selectLoading = createSelector(
  commentState,
  (state) => state.loading
);

export const selectAllComments = createSelector(
  commentState,
  (state) => state.comments
);
