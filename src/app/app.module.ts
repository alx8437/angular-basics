import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostComponent} from './Post/post.component';
import {CounterComponent} from './Counter/counter.component';
import { Post2Component } from './post2/post2.component';
import {Post3Component} from './Post3/post3.component';
import { PreloaderComponent } from './preloader/preloader.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CounterComponent,
    Post2Component,
    Post3Component,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
