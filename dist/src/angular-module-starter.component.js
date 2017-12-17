import { Component } from '@angular/core';
import { AngularModuleStarterService } from './angular-module-starter.service';
var AngularModuleStarterComponent = (function () {
    function AngularModuleStarterComponent(service) {
        this.service = service;
        this.message = this.service.getMessage();
    }
    return AngularModuleStarterComponent;
}());
export { AngularModuleStarterComponent };
AngularModuleStarterComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular-module-starter',
                template: "\n        <h1>{{message}}</h1>\n        <p>This is working and pulling in the message from a service.</p>\n        <p>See the source code for working example.</p>\n    "
            },] },
];
/** @nocollapse */
AngularModuleStarterComponent.ctorParameters = function () { return [
    { type: AngularModuleStarterService, },
]; };
//# sourceMappingURL=angular-module-starter.component.js.map