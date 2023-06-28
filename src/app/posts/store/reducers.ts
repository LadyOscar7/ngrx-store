import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './actions';
import { PostInterface } from '../interfaces/post.interface';

export interface PostsStateInterface {
  isLoading: boolean;
  posts: PostInterface[];
  error: string | null;
}

export const initialState: PostsStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
};

export const postReducers = createReducer(
  initialState,
  on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(PostsActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
