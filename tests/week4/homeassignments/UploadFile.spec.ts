import test, { expect } from "@playwright/test";
import path from "path";

test.only('Upload file using event listerner - filechoose', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload')

    //step 1: Get ready to listen the event. Estabilish the event which we are expecting to happen.
    const fileChooser = page.waitForEvent('filechooser')
    //We can use timeout if required, like below
    //const fileChooser = page.waitForEvent('filechooser', {timeout: 2000})

    //step2: Trigger the event using click. i.e. Clicking the upload button
    await page.locator(`//div[@id='drag-drop-upload']`).click()

    //step3: Resolve promise by catching the event
    const catchEvent = await fileChooser

    //step 4: Inject the file from the directory
    catchEvent.setFiles(path.join(__dirname, '../../../uploadFile/Sample_file.pdf'))
    await page.waitForTimeout(3000)

    expect(page.getByText('Sample_file.pdf')).toContainText('Sample_file.pdf')
    await page.waitForTimeout(3000)

})