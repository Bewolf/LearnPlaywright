import { AbstractClass } from "./AbstractClass";

export class ImplementationClass extends AbstractClass {

    enterText(locator: unknown, text?: unknown): void {
        console.log("enter text")
    }

}