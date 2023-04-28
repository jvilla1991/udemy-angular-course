import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assignment',
  templateUrl: './second-assignment.component.html',
  styleUrls: ['./second-assignment.component.css']
})
export class SecondAssignmentComponent implements OnInit {

  userName: string;
  ifUserNameEmpty = true;

  constructor() { }

  ngOnInit(): void {
  }

  clearUserName() {
    this.userName = '';
    this.ifUserNameEmpty = true;
  }

  onUpdateUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
    if (this.userName.length > 0) {
      this.ifUserNameEmpty = false;
    }
  }
}
