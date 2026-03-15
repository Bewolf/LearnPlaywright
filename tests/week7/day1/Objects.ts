//use export in class file and import in the usage file to access the method or property of another class
import { LoginPage } from "./Class"

let obj1 = new LoginPage("https://www.gmail.com")
obj1.loadUrl()
console.log("Calling from another file"+obj1.password)