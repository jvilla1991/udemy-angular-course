import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: blue;
  }
  `]
}) // Inline Styles also work just like doing template InLine
export class AppComponent {
  name = 'my-first-app';
}
