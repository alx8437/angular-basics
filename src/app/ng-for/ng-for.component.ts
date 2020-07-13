import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent  {

arr = [1, 1, 2, 3, 5, 8, 13];

objs = [
  {
  author: 'Alex',
  title: 'Post1',
  comments: [
    {name: 'Dima', text: ' lorem'},
    {name: 'Dima', text: ' lorem1'}
  ]
},
  {
    author: 'Alex',
    title: 'Post2',
    comments: [
      {name: 'Lara', text: ' lorem'},
      {name: 'Lara', text: ' lorem1'}
    ]
  }
];
}
