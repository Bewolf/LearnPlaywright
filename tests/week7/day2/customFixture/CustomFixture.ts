//Step 1 create alias name
import { test as baseCode, Page } from '@playwright/test'

//step 2
//customTest is equivalent to test
//{page} is equivalent to loginPage
export const customTest = baseCode.extend<{ loginPage: Page }>({

    //step 3
    loginPage: async ({ page }, use) => {

        await page.goto("https://login.salesforce.com/");
        await page.getByLabel('Username').fill("dilipkumar.rajendran@testleaf.com")
        await page.getByLabel("password").last().fill("TestLeaf@2025")
        await page.locator("#Login").click()

        //step 4
        await use(page)
    }

})