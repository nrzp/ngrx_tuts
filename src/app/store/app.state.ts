import { PostsState } from './../post/state/posts.state';
import { counterState } from "../counter/state/counter.state";
import { counterReducer } from '../counter/state/counter.reducer';
import { postsReducer } from '../post/state/posts.reducer';

export interface appState {
    counter: counterState,
    posts: PostsState
}

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer
}