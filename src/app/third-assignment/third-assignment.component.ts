import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css']
})
export class ThirdAssignmentComponent implements OnInit {
  display: boolean = true;
  buttonClickLog = [''];
  isOverFourElements: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.display = this.display === true ? false : true;
    this.buttonClickLog.push('Button Pushed at ' + new Date().getTime());
    if (this.buttonClickLog.length > 4) {
      this.isOverFourElements = true;
    }
  }

  getBackgroundColor() {
    if (this.isOverFourElements ) {
      return 'blue';
    }
    else {
      return 'transparent';
    }
   }
}
