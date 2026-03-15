import test from '@playwright/test'
import { ViewLeads } from './ViewLead'

test("POM with LT", async ({ page }) => {

    let obj = new ViewLeads(page)

    await obj.launchApp()
    await obj.enterUsername()
    await obj.enterPassword()
    await obj.clickLogin()
    await obj.clickCRMSfa()
    await obj.clickOnLeads()
    await obj.clickCreateLead()
    await obj.enterFirstName()
    await obj.enterLastName()
    await obj.enterCompanyName()
    await obj.selectSource()
    await obj.clickSubmit()
    await obj.verifyCreatedLead()
})