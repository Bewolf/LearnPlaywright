import { Browser } from "./Browser";

class Chrome extends Browser {

    public launchBrowser() {
        console.log("Launch Chrome Browser")
    }
}

let chromeObj = new Chrome()
chromeObj.browserType()
chromeObj.browserVersion()
chromeObj.launchBrowser()