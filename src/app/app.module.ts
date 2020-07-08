import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostComponent} from "./Post/post.component";
import {CounterComponent} from "./Counter/counter.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
