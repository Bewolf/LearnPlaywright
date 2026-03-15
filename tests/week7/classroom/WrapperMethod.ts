export class WrapperMethod {

    url: string

    constructor(url: string) {
        this.url = url
        console.log("Url is: " + url)
    }

    loadurl() {
        console.log("Load URL")
    }

    public verifyTitle() {
        console.log("Title verification");
    }

    private alertType() {
        console.log("Alert type")
    }

    public invoke() {
        this.alertType()
    }
}
let obj = new WrapperMethod("https://www.facebook.com")
obj.invoke()
obj.verifyTitle()