import { Browser } from "./Browser"
import { Edge } from "./Edge"

export class Safari extends Browser {

    async readerMode() {
        console.log("Read mode")
    }

    async fullScreenMode() {
        console.log("Full screen mode")
    }
}

let safari = new Safari("Safari", "8.0")
safari.openURL()
safari.fullScreenMode()
safari.navigateBack()
safari.closeBrowser()