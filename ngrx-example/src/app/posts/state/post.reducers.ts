import { createReducer, on } from '@ngrx/store';
import { Post } from '../models/post.model';
import * as PostActions from './post.actions';

export const postsFeatureKey = 'posts';

export interface PostState {
  loading: boolean;
  posts: Post[];
}

export const initialState: PostState = {
  loading: false,
  posts: [],
};

export const postsReducer = createReducer(
  initialState,
  on(PostActions.setLoading, (state, {loading}) => ({...state, loading })),
  on(PostActions.setAllPosts, (state, { posts }) => ({ ...state, posts }))
);
