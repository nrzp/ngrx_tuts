import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
import { Post } from 'src/app/modal/post.modal';
export const ADD_POST = '[Posts Page] add post';

export const addPost = createAction(ADD_POST, props<{ post: Post }>());