import test, { chromium, expect } from "@playwright/test";

test('Create Storage state for Sales force', async ({ page }) => {

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel('Username').fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("password").last().fill("TestLeaf@2025")
    await page.locator("#Login").click()

    //Create storage state
    //For path no ./ is not required
    //Running this will create SF_Login.json file under the helper folder
    //This will not support for all application
    //created json file should called in the test file using test.use
    await page.context().storageState({ path: "helper/SF_Login.json" })
})