(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.moduleStarter = global.ng.moduleStarter || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var AngularModuleStarterService = (function () {
    function AngularModuleStarterService() {
        console.log('AngularModuleStarterService constructor');
    }
    AngularModuleStarterService.prototype.getMessage = function () {
        return 'Hello from the Service!';
    };
    return AngularModuleStarterService;
}());
AngularModuleStarterService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
AngularModuleStarterService.ctorParameters = function () { return []; };

var AngularModuleStarterComponent = (function () {
    function AngularModuleStarterComponent(service) {
        this.service = service;
        this.message = this.service.getMessage();
    }
    return AngularModuleStarterComponent;
}());
AngularModuleStarterComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'angular-module-starter',
                template: "\n        <h1>{{message}}</h1>\n        <p>This is working and pulling in the message from a service.</p>\n        <p>See the source code for working example.</p>\n    "
            },] },
];
/** @nocollapse */
AngularModuleStarterComponent.ctorParameters = function () { return [
    { type: AngularModuleStarterService, },
]; };

var JasonRocksComponent = (function () {
    function JasonRocksComponent() {
        this.message = 'Message from the contructor.';
    }
    return JasonRocksComponent;
}());
JasonRocksComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'jason-rocks',
                template: "\n        <h1>{{message}}</h1>\n        <p>Another component to show you have multiple elements now in a single package.</p>\n    "
            },] },
];
/** @nocollapse */
JasonRocksComponent.ctorParameters = function () { return []; };

function asyncLocalStorageFactory() {
    return new AngularModuleStarterService();
}
var AngularModuleStarterModule = (function () {
    function AngularModuleStarterModule() {
    }
    return AngularModuleStarterModule;
}());
AngularModuleStarterModule.decorators = [
    { type: _angular_core.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
AngularModuleStarterModule.ctorParameters = function () { return []; };

/**
 * @module
 * @description
 * Entry point for all public APIs of the Angular Module
 */

exports.AngularModuleStarterModule = AngularModuleStarterModule;
exports.AngularModuleStarterService = AngularModuleStarterService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
