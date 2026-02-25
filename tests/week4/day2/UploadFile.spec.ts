import test, { expect } from "@playwright/test";
import path from "path";

test('Uploading a file', async ({ page }) => {

    await page.goto('https://www.leafground.com/file.xhtml')
    //Locate the upload button and verify if it is inside the 'input' tag
    //If yes, then locate the element 
    //await page.setInputFiles(`(//input[@type='file])[1]`, '')
    const uploadButton = page.locator(`(//input[@type='file'])[1]`)
    //Identify the file path
    //__dirname will give --> D:\AravindrajV\LearnPlaywright\tests\week4\day2 so we have to use ../../../ to come to LearnPlaywright folder
    //we can also use ./uploadfile/Sample_file.pdf but this wont work in all machines like linux, mac, etc.,
    //So it is better to use like, ../../../uploadfile/Sample_file.pdf
    const filePath = path.join(__dirname, '../../../uploadfile/Sample_file.pdf')
    const filePath1 = path.join(__dirname, '../../../uploadfile/sample_image.png')
    console.log("__dirname: " + __dirname)
    console.log("filePath: " + filePath)

    await page.waitForTimeout(3000)
    await uploadButton.setInputFiles(filePath)
    expect(page.getByText('Sample_file.pdf 13.1 KB')).toContainText('Sample_file.pdf')
    await page.waitForTimeout(3000)

    //to upload multiple files
    /*await page.getByLabel('Upload files').setInputFiles([
        path.join(__dirname, 'file1.txt'),
        path.join(__dirname, 'file2.txt'),
    ]);*/
    //await uploadButton.setInputFiles([filePath, filePath1])
    await page.waitForTimeout(3000)
})

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