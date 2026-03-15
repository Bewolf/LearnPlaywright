import { Browser } from "./Browser"

export class Chrome extends Browser {

    async openIncognito() {
        console.log("Open incognito")
    }

    async clearCache() {
        console.log("Clear Cache")
    }
}