import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class CounterComponent {
  value = 0;

  counterUp(): void {
    this.value += 1;
  }

  counterDown(): void {
    this.value -= 1;
  }

  resetValue(): void {
    this.value = 0;
  }

  changeInput(event: KeyboardEvent): void {
    const inputValue = Number((event.target as HTMLInputElement).value);
    if (isNaN(inputValue)) {
      alert('only number');
    } else {
      this.value = inputValue;
    }
  }

}
