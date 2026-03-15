export interface InterfaceClass {
    enterText(locator: string): void
    enterText(locator: string, text?: string): void
    getText(locator: string): string
    getText(locator: string, text?: boolean): string
}