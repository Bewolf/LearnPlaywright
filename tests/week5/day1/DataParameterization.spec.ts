import test from "@playwright/test";
import loginData from '../../../data/sf_login.json'


for (const data of loginData) {
    test(`Test case id: ${data.testID} Sales force login by passing data from Json`, async ({ page }) => {
        await page.goto("https://login.salesforce.com/");
        await page.getByLabel('Username').fill(data.username)
        await page.getByLabel("password").last().fill(data.password)
        await page.locator("#Login").click()
    })
}

//to execute only one set of data from the json array
let data = loginData[0]
test(`Test case id: ${data.testID} Sales force login by passing data from Json2`, async ({ page }) => {
    await page.goto("https://login.salesforce.com/");
    await page.getByLabel('Username').fill(data.username)
    await page.getByLabel("password").last().fill(data.password)
    await page.locator("#Login").click()
})
