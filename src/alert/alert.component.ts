import { Component, OnInit } from '@angular/core';
import { SpxAlertService } from '../alert.service';

@Component({
  selector: 'spx-alert',
  template: `
  <div
    *ngIf="message"
    class="spx-toaster"
    [class.is-open]="message"
  >
    <div *ngFor="let m of message; let i = index">
      <div
        class="spx-toast"
        *ngIf="message"
        [ngClass]="{'is-success': m.type === 'success', 'is-error': m.type === 'error'}"
      >
        <p>{{ m.text }}</p>
        <button class="spx-btn spx-btn--pr spx-btn--sm" (click)="primaryAction(i)">Action</button>
        <button class="spx-btn spx-btn--pr spx-btn--sm" (click)="removeAlert(i)">Remove</button>
      </div>
    </div>
  </div>
  `
})

export class AlertComponent {
  message = [];

  constructor(private sas: SpxAlertService) { }

  ngOnInit() {
    this.sas.getMessage()
      .subscribe(message => {
        this.message = message;
      });
  }

  primaryAction(i) {
    this.message[i].callBack();
  }

  removeAlert(i) {
    this.sas.removeAlertByIndex(i);
  }
}
