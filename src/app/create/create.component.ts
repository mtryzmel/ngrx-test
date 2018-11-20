import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as PostActions from './../store/actions/post.actions';
import { Post } from '../models/post.model';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    constructor(
        private store: Store<AppState>
    ) {}

    ngOnInit() {}

    addPost(title: string) {
        const post: Post = {
            title: title
        };
        this.store.dispatch(new PostActions.AddPost(post));
    }
}
