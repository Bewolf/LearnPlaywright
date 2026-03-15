export class WebComponent {

    selector: string

    constructor(selector: string) {
        this.selector = selector
    }

    click() {
        console.log("Selector " + this.selector + " is clicked")
    }

    focus() {
        console.log("Selector " + this.selector + " is focused")
    }
}