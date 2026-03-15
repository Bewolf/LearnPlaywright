"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapperMethod = void 0;
var WrapperMethod = /** @class */ (function () {
    function WrapperMethod(url) {
        this.url = url;
        console.log("Url is: " + url);
    }
    WrapperMethod.prototype.loadurl = function () {
        console.log("Load URL");
    };
    WrapperMethod.prototype.verifyTitle = function () {
        console.log("Title verification");
    };
    WrapperMethod.prototype.alertType = function () {
        console.log("Alert type");
    };
    WrapperMethod.prototype.invoke = function () {
        this.alertType();
    };
    return WrapperMethod;
}());
exports.WrapperMethod = WrapperMethod;
var obj = new WrapperMethod("https://www.facebook.com");
obj.invoke();
obj.verifyTitle();
