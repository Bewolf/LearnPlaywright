"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = require("./Button");
var TextInput_1 = require("./TextInput");
function testComponents() {
    var button = new Button_1.Button("#login");
    button.focus();
    button.click();
    var textInput = new TextInput_1.TextInput("#username");
    textInput.focus();
    textInput.enterText("Test data");
}
testComponents();
