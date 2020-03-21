import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  mockarry = [
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
    '1'
  ]

  constructor(
    private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  selectClass(classString: string){
    // call service
  }

}
