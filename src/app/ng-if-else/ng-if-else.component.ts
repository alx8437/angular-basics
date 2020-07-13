import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent {

  preloader = true;

  offPreloader(): void {
    this.preloader = !this.preloader;
  }

}
