import { WebComponent } from "./WebComponent";

export class Button extends WebComponent {

    click() {
        //to call click() method present in the base method.
        //super.click() 
        console.log("Button " + this.selector + " is clicked")
    }

}
