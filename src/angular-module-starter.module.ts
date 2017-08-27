import { NgModule } from '@angular/core';

import { AngularModuleStarterService } from './angular-module-starter.service';
import { AngularModuleStarterComponent } from './angular-module-starter.component';
import { JasonRocksComponent } from './jason-test.component';

export function asyncLocalStorageFactory() {
  return new AngularModuleStarterService();
}

@NgModule({
  declarations: [
    AngularModuleStarterComponent,
    JasonRocksComponent,
  ],
  exports: [
    AngularModuleStarterComponent,
    JasonRocksComponent,
  ],
  providers: [
    {
      provide: AngularModuleStarterService,
      useFactory: asyncLocalStorageFactory
    }
  ]
})
export class AngularModuleStarterModule {
}
