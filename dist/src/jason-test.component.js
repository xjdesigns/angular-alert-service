import { Component } from '@angular/core';
var JasonRocksComponent = (function () {
    function JasonRocksComponent() {
        this.message = 'Message from the contructor.';
    }
    return JasonRocksComponent;
}());
export { JasonRocksComponent };
JasonRocksComponent.decorators = [
    { type: Component, args: [{
                selector: 'jason-rocks',
                template: "\n        <h1>{{message}}</h1>\n        <p>Another component to show you have multiple elements now in a single package.</p>\n    "
            },] },
];
/** @nocollapse */
JasonRocksComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=jason-test.component.js.map