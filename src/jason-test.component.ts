import { Component } from '@angular/core';
// import { AngularModuleStarterService } from './angular-module-starter.service'

@Component({
  selector: 'jason-rocks',
  template: `
        <h1>{{message}}</h1>
        <p>Fuck some more bitches</p>
    `
})
export class JasonRocksComponent {
  public message: string;

  constructor() {
    this.message = 'You the fucking man!';
    alert('you got this shit playa')
  }
}
