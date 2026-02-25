import test, { expect } from "@playwright/test";
import path from "node:path";


test('Downloading the file using event listener', async ({ page }) => {
    await page.goto('https://www.leafground.com/file.xhtml')
    //establish event and save it
    const download = page.waitForEvent('download')
    //trigger event
    await page.locator(`//span[contains(text(),'Download')]`).click()
    //Catch the event download event
    const catchEvent = await download
    //Extract the file from the server response
    //We can give the name of the file in the path itself or we can use suggestedFilename() method to create a random name
    //Example: catchEvent.saveAs(path.join(__dirname, '../../../downloadfile/download.pdf'))
    await catchEvent.saveAs(path.join(__dirname, '../../../downloadfile/' + catchEvent.suggestedFilename()))
    await page.waitForTimeout(3000)

})

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