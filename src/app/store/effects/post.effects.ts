import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import * as postActions from '../actions/post.actions';

@Injectable()
export class PostEffects {

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) { }

    @Effect()
    loadPosts$ = this.actions$
        .ofType(postActions.GET_POSTS)
        .pipe(
            switchMap(() => {
                return this.postService.getPosts()
                    .pipe(
                        map(posts => new postActions.GetPostsSuccess(posts)),
                        catchError(error => of(new postActions.GetPostsFail(error)))
                    );
            })
        );
}
