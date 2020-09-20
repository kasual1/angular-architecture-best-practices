import { createReducer, on } from '@ngrx/store';
import { Comment } from '../models/comment.model';
import * as CommentActions from './comment.actions';

export const commentsFeatureKey = 'comments';

export interface CommentState {
  loading: boolean;
  comments: Comment[];
}

export const initialState: CommentState = {
  loading: false,
  comments: [],
};

export const commentsReducer = createReducer(
  initialState,
  on(CommentActions.setLoading, (state, {loading}) => ({...state, loading })),
  on(CommentActions.setAllComments, (state, { comments }) => ({ ...state, comments }))
);
