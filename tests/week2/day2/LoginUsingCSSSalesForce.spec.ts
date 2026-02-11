import test from "@playwright/test";

test('Login only using css selectors', async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").last().fill("TestLeaf@2025")
    await page.locator(".button.r4.wide.primary").first().click() //not recommended to use class here as it has number in it
    await page.locator(`button[title='App Launcher']`).click()
    await page.waitForTimeout(5000);
    const title = await page.title();
    console.log("Page title is: " + title)
})