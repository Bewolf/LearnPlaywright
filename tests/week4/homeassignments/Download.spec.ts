import test, { expect } from "@playwright/test";
import path from "node:path";

test.only('File io - Downloading file using event listener', async ({ page }) => {
    await page.goto('https://www.file.io/')
    //Manual wait to upload file manually
    await page.waitForTimeout(20000)
    const upload = page.waitForEvent('download', { timeout: 10000 })
    await page.locator(`(//span[contains(text(),'Download All')])[1]`).click();
    const catchEvent = await upload
    catchEvent.saveAs(path.join(__dirname, '../../../downloadfile/' + catchEvent.suggestedFilename()))
    await page.waitForTimeout(3000)
})