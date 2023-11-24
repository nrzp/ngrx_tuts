import { Post } from './../../modal/post.modal';
export interface PostsState {
    posts: Post[];
}

export const initialState: PostsState = {
    posts: [
        { id: 1, title: 'Title 1', desc: 'Desciption 1' },
        { id: 2, title: 'Title 2', desc: 'Desciption 2' }
    ]
}


