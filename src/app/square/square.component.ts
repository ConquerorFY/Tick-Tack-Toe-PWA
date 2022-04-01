import { Component, OnInit, Input } from '@angular/core';

// Decorators, used to pass in objects to configure how the component behaves
@Component({
  selector: 'app-square', // name of component

  // templateUrl: './square.component.html', // URL for the JavaScript-Powered HTML Template.

  template: `
    <!-- <p>
      Variable Interpolation (Angular Implements Change Detection, 
            where it looks for changes in these properties (by programmers & code)
            and update the UI accordingly)
      {{ rando }} 
    </p> -->

    <!-- <button>{{ value }}</button> -->

    <!-- Use NbButton Directive -->
    <button nbButton hero status="primary" *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `, // JavaScript-Powered HTML Template 

  // styleUrls: ['./square.component.scss'],

  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})

export class SquareComponent {
  // rando = Math.random();

  // constructor() {
  //   setInterval(() => {
  //     this.rando = Math.random();
  //   }, 500);
  // }

  // Input Properties into this Component (Parent -> Child)
  // In this case can be either 'X' or 'O' (TypeScript)
  // Dumb Component (No Way to Modify in the Child)
  @Input() value: 'X' | 'O' = "X";


  // Lifecycle Hook for code to run when component is first initialized
  // ngOnInit(): void {
  // }

}
