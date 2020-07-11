import { Component } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent {
  inputValue = '';
  constructor() { }
  changeInput(event): void {
    this.inputValue = event.target.value;
  }
}
