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
  img = 'https://img.favpng.com/4/1/17/react-javascript-vue-js-logo-png-favpng-T97hHj5T2UsnURsbZ0PB5Mi3c.jpg';

  constructor() {
    setTimeout(() => {
      this.img = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';
    }, 5000);
  }
}
