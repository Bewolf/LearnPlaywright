"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebComponent = void 0;
var WebComponent = /** @class */ (function () {
    function WebComponent(selector) {
        this.selector = selector;
    }
    WebComponent.prototype.click = function () {
        console.log("Selector " + this.selector + " is clicked");
    };
    WebComponent.prototype.focus = function () {
        console.log("Selector " + this.selector + " is focused");
    };
    return WebComponent;
}());
exports.WebComponent = WebComponent;
