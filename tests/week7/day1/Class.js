"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
var LoginPage = /** @class */ (function () {
    //function cannot be created inside the class
    //if created inside the class, it will throw the error "Unexpected token. A constructor, method, accessor, or property was expected"
    /*function add() (params:type) {
        
    }*/
    //Inside the class we cannot create an object
    //if created inside the class, it will throw the error "Unexpected token. A constructor, method, accessor, or property was expected"
    //let obj = new LoginPage()
    //default constructor
    //inside a class only one constructor is allowed.
    //example 1
    /*constructor() {
        console.log("Inside default constructor");
    }*/
    //example 2
    /*constructor(url: string) {
        console.log("Inside default constructor");
        console.log("Url is: " + url)
    }*/
    //example 3
    //it wont print yahoo.com as the value is assigned from the object as google.com.
    function LoginPage(url) {
        this.username = "Democsr";
        this.password = "crmsfa";
        this.url = "https://www.yahoo.com";
        this.url = url;
        console.log("Url is: " + url);
    }
    LoginPage.prototype.loadUrl = function () {
        console.log("Load url");
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
function add() {
}
//let obj = new LoginPage();
//let obj = new LoginPage("https://www.google.com");
//let obj = new LoginPage("https://www.google.com");
var obj = new LoginPage("https://www.google.com");
obj.loadUrl();
console.log("Username: " + obj.username);
console.log("Password: " + obj.password);
//TO run use tsc Class.ts to compile it. It will create a .js file
//then run node Class.js to execute
