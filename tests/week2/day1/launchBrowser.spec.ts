import test, { chromium } from "@playwright/test"

test('Launch Browser', async () => {

    const browser = await chromium.launch({ headless: false, channel: 'chrome' })
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForTimeout(5000);
})