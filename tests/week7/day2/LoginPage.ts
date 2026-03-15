import { ImplementationClass } from "./ImplementationClass";

class LoginPage extends ImplementationClass {


}

let obj = new LoginPage();
obj.enterText('//span', 'input value')
obj.enterText('//div')
let text = obj.getText('//div')
console.log("Text is: " + text)

let text1 = obj.getText('//div', false)
console.log("Text1 is: " + text)

obj.typeAndClick()