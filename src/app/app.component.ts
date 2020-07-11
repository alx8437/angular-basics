import {Component} from '@angular/core';
import {PreloaderComponent} from './preloader/preloader.component';
import {CounterComponent} from './Counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world! I am Angular Developer!';
  inputValue = 'initial';

  constructor() {

  }
  inputChange(event): void {
    this.inputValue = event.target.value;
  }
  clearInput(event: KeyboardEvent): void {
    this.inputValue = '';
  }
}
