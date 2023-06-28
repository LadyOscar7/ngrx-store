import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsStateInterface } from './reducers';

const selectFeature = createFeatureSelector<PostsStateInterface>('posts');

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const postsSelector = createSelector(
  selectFeature,
  (state) => state.posts
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
