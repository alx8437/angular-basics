import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CounterComponent} from './Counter/counter.component';
import { PreloaderComponent } from './preloader/preloader.component';
import {FormsModule} from '@angular/forms';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { BindComponent } from './bind/bind.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    PreloaderComponent,
    NgmodelComponent,
    BindComponent,
    NgstyleComponent,
    NgclassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
