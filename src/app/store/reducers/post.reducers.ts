import { Post } from '../../models/post.model';
import * as PostActions from '../actions/post.actions';

export function postReducer(state: Post[] = [], action: PostActions.Actions) {
    switch (action.type) {
        case PostActions.GET_POSTS:
            return [...state];

        case PostActions.GET_POSTS_SUCCESS:
            console.log(action.payload);
            return [...state];

        case PostActions.GET_POSTS_FAIL:
            return [...state];

        case PostActions.ADD_POST:
            return [...state, action.payload];

        case PostActions.REMOVE_POST:
            state.splice(action.payload, 1);
            return state;

        default:
            return state;
    }
}
