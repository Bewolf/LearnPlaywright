import test, { expect } from "@playwright/test";
import { getSalesforceToken } from '../../../utils/salesforceAuth';

let auth: any
let accessToken: string
let instanceURL: String
let tokenType: any
let caseId: any
let caseNumber: any

test.describe(`Sales force Case CRUD using UI and API`, () => {

    test(`Create case`, async ({ request }) => {
        auth = await getSalesforceToken(request);
        accessToken = auth.accessToken
        instanceURL = auth.instanceURL
        tokenType = auth.tokenType

        const postRequest = await request.post(`${instanceURL}/services/data/v62.0/sobjects/Case/`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `${tokenType} ${accessToken}`
            },
            data: {
                "status": "Escalated",
                "Origin": "Email"
            }
        })
        let response = await postRequest.json()
        caseId = response.id
        expect(postRequest.status()).toBe(201)
    })

    test(`Get case`, async ({ request }) => {
        let getResponse = await request.get(`${instanceURL}/services/data/v62.0/sobjects/Case/${caseId}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `${tokenType} ${accessToken}`
            }
        })
        let response = await getResponse.json()
        expect(getResponse.status()).toBe(200)
        expect(response.Id).toBe(caseId)
        caseNumber = response.CaseNumber
    })

    test(`Update case in the UI`, async ({ page }) => {
        await page.goto("https://login.salesforce.com/");
        await page.getByLabel('Username').fill("aravindraj.vel.40280b5c1716@agentforce.com")
        await page.getByLabel("password").last().fill("Admin@123")
        await page.locator("#Login").click()
        //enter otp code from email manually
        await page.locator(`.slds-button.slds-context-bar__button.slds-icon-waffle_container.slds-show`).click({ timeout: 60000 })
        await page.getByText(`View All`).last().scrollIntoViewIfNeeded()
        await page.getByText(`View All`).last().click()
        await page.getByPlaceholder('Search apps or items...').fill('Cases')
        await page.locator(`(//mark[text()='Cases'])[1]`).click()
        await page.locator(`(//span[text()='${caseNumber}'])[1]`).click()
        await page.locator(`//button[text()='Edit']`).click()
        await page.locator(`(//button[contains(@id,'combobox-button')])[1]`).click()
        await page.locator(`//span[text()='Working']`).click()
        await page.locator(`//button[text()='Save']`).click()
        expect(page.locator(`(//span[text()='00001026'])[2]`)).toBeVisible()
        await page.waitForTimeout(3000)
    })

    test(`Delete case`, async ({ request }) => {
        let getResponse = await request.delete(`${instanceURL}/services/data/v66.0/sobjects/Account/${caseId}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `${tokenType} ${accessToken}`
            }
        })
        let response = await getResponse.json()
        expect(getResponse.status()).toBe(204)
    })

})