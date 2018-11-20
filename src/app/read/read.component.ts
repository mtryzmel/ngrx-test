import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as PostActions from './../store/actions/post.actions';

@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

    posts$: Observable<Post[]>;

    constructor(
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.posts$ = this.store.select('post');
    }

    deletePost(index: number) {
        this.store.dispatch(new PostActions.RemovePost(index));
    }
}
