"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.browserType = function () {
        console.log("Browser type");
    };
    Browser.prototype.browserVersion = function () {
        console.log("Browser Version");
    };
    return Browser;
}());
exports.Browser = Browser;
