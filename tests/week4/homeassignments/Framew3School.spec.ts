import test, { expect } from "@playwright/test";

test('Handling alert - W3school', async ({ page }) => {

    page.on('dialog', dialog => {
        console.log("Message from the alert: " + dialog.message())
        console.log("Alert type: " + dialog.type())
        dialog.accept()
    })

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    const frame = page.frameLocator(`#iframeResult`)
    await frame.locator(`//button[text()='Try it']`).click()
    const confirmationMsg = frame.locator(`//p[contains(text(),"You pressed OK!")]`)
    expect(confirmationMsg).toHaveText('You pressed OK!')
    await page.waitForTimeout(3000)
})