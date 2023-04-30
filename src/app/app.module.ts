import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondAssignmentComponent } from './second-assignment/second-assignment.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component'; // The Extension is added by webpack that bundles our project automatically.
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ThirdAssignmentComponent } from './third-assignment/third-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    SecondAssignmentComponent,
    ThirdAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
