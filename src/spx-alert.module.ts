import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlertComponent } from './alert/alert.component';
import { SpxAlertService } from './alert.service';

export function AlertServiceFactory() {
  return new SpxAlertService();
}

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
  providers: [
    {
      provide: SpxAlertService,
      useFactory: AlertServiceFactory
    }
  ]
})
export class SpxAlertServiceModule {
}
