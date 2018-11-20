import { Action } from '@ngrx/store';
import { Post } from '../../models/post.model';

export const GET_POSTS = '[Post] Get Posts';
export const GET_POSTS_SUCCESS = '[Post] Get Posts Success';
export const GET_POSTS_FAIL = '[Post] Get Posts Fail';
export const ADD_POST = '[Post] Add';
export const REMOVE_POST = '[Post] Remove';

export class GetPosts implements Action {
    readonly type = GET_POSTS;

    constructor(public payload: Post[]) {}
}

export class GetPostsSuccess implements Action {
    readonly type = GET_POSTS_SUCCESS;

    constructor(public payload: Post[]) {}
}

export class GetPostsFail implements Action {
    readonly type = GET_POSTS_FAIL;

    constructor(public payload: any) {}
}

export class AddPost implements Action {
    readonly type = ADD_POST;

    constructor(public payload: Post) {}
}

export class RemovePost implements Action {
    readonly type = REMOVE_POST;

    constructor(public payload: number) {}
}

export type Actions = GetPosts | GetPostsSuccess | GetPostsFail | AddPost | RemovePost;
