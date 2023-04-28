import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector: '[app-servers]', // Example 1, same as above but in an attribute form
  selector: '.app-servers', // Example 2, same as above but in an class form
  templateUrl: './servers.component.html', // ALL COMPONENTS NEEDS TO HAVE TEMPLATES AT ALL TIMES
  // template: '<app-server></app-server><app-server></app-server>', // Ommitted the URL in the key, same thing as what's in the html file
  // template: `<app-server></app-server>
  // <app-server></app-server>`, // For multiple lines, using the back ticks
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
