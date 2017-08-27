import { Injectable } from '@angular/core';
var AngularModuleStarterService = (function () {
    function AngularModuleStarterService() {
        console.log('AngularModuleStarterService constructor');
    }
    AngularModuleStarterService.prototype.getMessage = function () {
        return 'Hello from the Service!';
    };
    return AngularModuleStarterService;
}());
export { AngularModuleStarterService };
AngularModuleStarterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AngularModuleStarterService.ctorParameters = function () { return []; };
//# sourceMappingURL=angular-module-starter.service.js.map