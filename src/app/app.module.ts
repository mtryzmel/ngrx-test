import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './store/reducers/post.reducers';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store';

@NgModule({
    declarations: [
        AppComponent,
        ReadComponent,
        CreateComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({
            post: postReducer
        }),
        // StoreModule.forFeature('posts', postReducer),
        EffectsModule.forRoot(effects)
        // EffectsModule.forFeature(effects)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
