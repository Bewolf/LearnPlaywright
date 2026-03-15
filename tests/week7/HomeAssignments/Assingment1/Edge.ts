import { Browser } from "./Browser"
import { Chrome } from "./Chrome"

export class Edge extends Browser {

    async takeSnap() {
        console.log("Take snap")
    }

    async clearCookies() {
        console.log("Clear cookies")
    }
}