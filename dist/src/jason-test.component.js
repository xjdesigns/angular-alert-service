import { Component } from '@angular/core';
// import { AngularModuleStarterService } from './angular-module-starter.service'
var JasonRocksComponent = (function () {
    function JasonRocksComponent() {
        this.message = 'You the fucking man!';
        alert('you got this shit playa');
    }
    return JasonRocksComponent;
}());
export { JasonRocksComponent };
JasonRocksComponent.decorators = [
    { type: Component, args: [{
                selector: 'jason-rocks',
                template: "\n        <h1>{{message}}</h1>\n        <p>Fuck some more bitches</p>\n    "
            },] },
];
/** @nocollapse */
JasonRocksComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=jason-test.component.js.map