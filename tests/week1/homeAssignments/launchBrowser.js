function launchBrowser(browserName) {
    let browser = browserName.toLowerCase()
    if (browser == "chrome") {
        console.log("Launching Chrome browser")
    } else if (browser == "edge") {
        console.log("Launching Edge browser")
    } else {
        console.log(browserName + " is not supported! Use Chrome or Edge browser.")
    }
}

function runTests(groupName) {
    let group = groupName.toLowerCase()
    switch (group) {

        case "Sanity":
            console.log("Running Sanity tests... ")
            break;

        case "Regression":
            console.log("Running Regression tests... ")
            break;

        default:
            console.log("Running Smoke tests...")
            break;
    }
}

launchBrowser("Safari")
runTests("")