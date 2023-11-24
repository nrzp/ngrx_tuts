import { PostsState } from './posts.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getPost = createFeatureSelector<PostsState>('posts');

export const getPostList = createSelector(getPost, (state)=>{
    return state.posts;
})