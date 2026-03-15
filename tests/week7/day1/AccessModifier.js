//3 access modifiers in typescript
//public, private and protected
//access modifier can be used on Property and methods
//public is the default access modifier
//Private - It can be accessed only inside the class
//protected - Can be accessed inside the class and in inherited class
var Methods = /** @class */ (function () {
    function Methods() {
    }
    Methods.prototype.add = function () {
        console.log(2 + 5);
    };
    Methods.prototype.sub = function () {
        console.log(7 - 3);
    };
    Methods.prototype.multiply = function () {
        console.log(5 * 3);
    };
    Methods.prototype.data = function () {
        //inside the calss private and protected method can be called inside a method using this.keyword.
        this.multiply();
        this.sub();
    };
    return Methods;
}());
var acc = new Methods();
acc.add();
acc.data();
