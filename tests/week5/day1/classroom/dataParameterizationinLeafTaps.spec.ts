import test from "@playwright/test";
import loginData from '../../../../data/leaftaps_login.json'


for (const data of loginData) {
    test(`Test case id: ${data.testID} Sales force login by passing data from Json`, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main");
        await page.locator("#username").fill(data.username)
        await page.getByLabel("password").last().fill(data.password)
        await page.locator(".decorativeSubmit").click()
        await page.locator(`text='CRM/SFA'`).click()
    })
}

//to execute only one set of data from the json array
let data = loginData[0]
test(`Test case id: ${data.testID} Sales force login by passing data from Json2`, async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill(data.username)
    await page.locator(".inputLogin").last().fill(data.password)
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()
})
