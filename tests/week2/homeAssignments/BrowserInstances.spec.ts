import test, { chromium, webkit } from "@playwright/test"
test('Launch Edge & Webkit Browser', async () => {

    const edgeBrowser = await chromium.launch({ headless: false, channel: 'msedge' })
    const edgeContext = await edgeBrowser.newContext();
    const edgepage = await edgeContext.newPage();
    await edgepage.goto("https://www.redbus.in/");
    await edgepage.waitForTimeout(2000);

    const webkitBrowser = await webkit.launch({ headless: false })
    const webkitContext = await webkitBrowser.newContext();
    const webKitPage = await webkitContext.newPage();
    await webKitPage.goto("https://www.flipkart.com/")
    await webKitPage.waitForTimeout(2000)

    let edgePageTitle = await edgepage.title()
    let webKitPageTitle = await webKitPage.title()
    let edgePageURL = edgepage.url() //await is not required for URL
    let webKitPageURL = webKitPage.url()

    console.log("edpgePageTitle: " + edgePageTitle)
    console.log("webKitPageTitle: " + webKitPageTitle)
    console.log("edgePageURL: " + edgePageURL)
    console.log("webKitPageURL: " + webKitPageURL)

})