import { Component } from '@angular/core';
import { AngularModuleStarterService } from './angular-module-starter.service'

@Component({
  selector: 'angular-module-starter',
  template: `
        <h1>{{message}}</h1>
        <p>This is working and pulling in the message from a service.</p>
        <p>See the source code for working example.</p>
    `
})
export class AngularModuleStarterComponent {

  public message: string;

  constructor(
    private service: AngularModuleStarterService
  ) {
    this.message = this.service.getMessage()
  }

}
