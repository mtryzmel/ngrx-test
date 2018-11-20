import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { catchError } from 'rxjs/operators';

const BASE_API = 'https://jsonplaceholder.typicode.com/posts/';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(
        private http: HttpClient
    ) { }

    getPosts(): Observable<Post[]> {
        return this.http
            .get<Post[]>(`${BASE_API}`)
            .pipe(
                catchError(error => Observable.throw(error.json))
            );
    }
}
