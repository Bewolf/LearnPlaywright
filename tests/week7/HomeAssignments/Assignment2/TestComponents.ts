import { Button } from "./Button"
import { TextInput } from "./TextInput"

function testComponents() {

    let button = new Button("#login")
    button.focus()
    button.click()

    let textInput = new TextInput("#username")
    textInput.focus()
    textInput.enterText("Test data")



}

testComponents()