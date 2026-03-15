export class Browser {

    browserName: string
    browserVersion: string

    constructor(bname: string, bversion: string) {
        this.browserName = bname
        this.browserVersion = bversion
        console.log("Browser Name:" + this.browserName)
        console.log("Browser Version:" + this.browserVersion)
    }

    async openURL() {
        console.log("Open URL")
    }

    async closeBrowser() {
        console.log("Close Browser")
    }

    async navigateBack() {
        console.log("Navigate Back")
    }
}