import { Browser } from "./Browser"

class Edge extends Browser {

    public launchBrowser() {
        console.log("Launch Edge Browser")
    }
}

let edgeObj = new Edge()
edgeObj.browserType()
edgeObj.browserVersion()
edgeObj.launchBrowser()
