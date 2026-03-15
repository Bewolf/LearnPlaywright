"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractClass = void 0;
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    AbstractClass.prototype.getText = function (locator, append) {
        console.log("get text");
        return "get text";
    };
    AbstractClass.prototype.typeAndClick = function () {
        console.log("Type and click");
    };
    return AbstractClass;
}());
exports.AbstractClass = AbstractClass;
