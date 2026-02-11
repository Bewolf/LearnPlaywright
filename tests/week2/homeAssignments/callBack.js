let browser = 'chrome'

function checkBrowserVersion(browser, callback) {
    //callback is called after this delay, which means callback is usually called 
    // when the desired action is done.
    setTimeout(() => {
        console.log("Waiting for " + browser + " version")
        callback()
    }, 2000);
}

function logBrowserVersion() {
    console.log("Your browser version is 1.0.0")
}

checkBrowserVersion(browser, logBrowserVersion)

