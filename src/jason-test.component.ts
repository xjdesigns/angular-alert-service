import { Component } from '@angular/core';

@Component({
  selector: 'jason-rocks',
  template: `
        <h1>{{message}}</h1>
        <p>Another component to show you have multiple elements now in a single package.</p>
    `
})
export class JasonRocksComponent {
  public message: string;

  constructor() {
    this.message = 'Message from the contructor.';
  }
}
