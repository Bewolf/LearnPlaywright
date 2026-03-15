"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//use export in class file and import in the usage file to access the method or property of another class
var Class_1 = require("./Class");
var obj1 = new Class_1.LoginPage("https://www.gmail.com");
obj1.loadUrl();
console.log(obj1.password);
