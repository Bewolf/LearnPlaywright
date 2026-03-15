import { WebComponent } from "./WebComponent"

export class TextInput extends WebComponent {

    value: string = ""

    enterText(text: string) {
        console.log(`Text box entered with value ${this.value}`)
    }


}