import { InterfaceClass } from "./InterfaceClass"

export abstract class AbstractClass implements InterfaceClass {
    abstract enterText(locator: string): void;
    abstract enterText(locator: string, text?: string): void


    getText(locator: string, append?: boolean): string {
        console.log("get text")
        return "get text"
    }

    typeAndClick() {
        console.log("Type and click")
    }

}