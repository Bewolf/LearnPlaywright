//Types of alert
/* Model alert
    1. Simple alert
    2. confirmation alert
    3. Prompt alert
Non-model alert
    1. sweet alert

dialog.accept();
dialog.accept('Text') --> to enter text in alert
dialog.dismiss();
dialog.message() --> to get message*/

//Playwright auto dismissed alert if not handled

import test from "@playwright/test";

test('Alert handling', async ({ page }) => {

    await page.goto('https://www.leafground.com/alert.xhtml');
    await page.locator(`(//span[text()='Show'])[2]`).click()

    await page.waitForTimeout(3000)

})

//to handle alerts -two methods
//page.once --> Handles first coming alert
//page.on --> Handles multiple alert

test('Alert handling with page.once', async ({ page }) => {

    //This handled only the first alert 
    page.once('dialog', alertType => {

        const message = alertType.message()
        console.log("Alert message: " + message)

        const type = alertType.type()
        console.log(type)

        alertType.accept()
    })

    await page.goto('https://www.leafground.com/alert.xhtml');
    await page.locator(`(//span[text()='Show'])[1]`).click()
    await page.waitForTimeout(3000)

    //this alert is not handled and it will be auto dismissed
    //the reason is page.once will handle the first alert
    await page.locator(`(//span[text()='Show'])[2]`).click()

})

test.only('Handle alert using page.on', async ({ page }) => {
    //This handles all alerts
    page.on('dialog', alertType => {

        const message = alertType.message()
        console.log("Alert message: " + message)

        const type = alertType.type()
        console.log(type)

        if (type === 'alert') {
            alertType.accept()
        } else if (type === 'confirm') {
            alertType.dismiss()
        } else if (type === 'prompt') {
            alertType.accept('Aravind')
        }

        //we can also accept or dismiss the alert based on alert message too
        //Example: if alertType.message() === 'I'm simple alert' then accept it else dismiss it

    })

    await page.goto('https://www.leafground.com/alert.xhtml');
    await page.locator(`(//span[text()='Show'])[1]`).click()

    //this alert is also handled
    await page.locator(`(//span[text()='Show'])[2]`).click()

    //prompt alert 
    await page.locator(`(//span[text()='Show'])[5]`).click()
    await page.waitForTimeout(3000)
})
