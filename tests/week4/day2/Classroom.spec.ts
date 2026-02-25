import test, { expect } from "@playwright/test";
import path from "node:path";

test('File upload in File io using input tag', async ({ page }) => {
    await page.goto('https://www.file.io/')
    await page.locator(`//input[@id='select-files-input']`)
        .setInputFiles(path.join(__dirname, '../../../uploadFile/Sample_file.pdf'), { timeout: 10000 })
    await expect(page.getByText('Sample_file.pdf')).toContainText('Sample_file.pdf', { timeout: 10000 })
})

//This is not working in file.io website
test.only('Uploading file using event listener', async ({ page }) => {
    await page.goto('https://www.file.io/')
    const upload = page.waitForEvent('filechooser', { timeout: 10000 })
    await page.locator(`//input[@id='select-files-input']`).click();
    const catchEvent = await upload
    catchEvent.setFiles(path.join(__dirname, '../../../uploadFile/Sample_file.pdf'), { timeout: 10000 })
    await expect(page.getByText('Sample_file.pdf')).toContainText('Sample_file.pdf', { timeout: 10000 })
})