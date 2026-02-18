import test, { expect } from "@playwright/test";
import { TIMEOUT } from "node:dns";

test.beforeEach('Login', async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("DemoSalesManager")
    await page.locator(".inputLogin").last().fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()
})

test.afterEach('Print title', async ({ page }) => {
    const title = await page.title()
    console.log("Page title: " + title)
})

const firstName = "Raj"

test('Create lead', async ({ page }) => {
    const companyName = "ABC"

    const lastName = "raj"

    await page.locator(`text='Create Lead'`).first().click()
    await page.locator(`#createLeadForm_companyName`).fill(companyName)
    await page.locator("#createLeadForm_firstName").fill(firstName)
    await page.locator("#createLeadForm_lastName").fill(lastName)
    await page.locator("#createLeadForm_personalTitle").fill("MR.")
    await page.locator("#createLeadForm_generalProfTitle").fill("SR Lead")
    await page.locator("#createLeadForm_annualRevenue").fill("1000000")
    await page.locator("#createLeadForm_departmentName").fill("QA")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210")
    await page.locator(`[name='submitButton']`).click()

    //assertions
    const actualCompanyName = await page.locator('#viewLead_companyName_sp').innerText()
    expect(actualCompanyName).toContain(companyName)
    expect(page.locator(`#viewLead_firstName_sp`)).toHaveText(firstName)
    expect(page.locator(`#viewLead_lastName_sp`)).toHaveText(lastName)
    expect(page.locator(`#viewLead_statusId_sp`)).toHaveText('Assigned')
})

test('Edit Lead', async ({ page }) => {
    //expect(page.locator(`#viewLead_firstName_sp`)).toBeVisible()
    await page.locator(`//a[text()='Leads']`).click()
    await page.locator(`//a[text()='Find Leads']`).click()
    await page.locator(`(//input[@name='firstName'])[3]`).fill(firstName)
    await page.getByRole('button', { name: 'Find Leads' }).click()
    await page.locator(`((//div[text()='Lead ID']/ancestor::table/following::table)[1]//a)[1]`).click()
    await page.locator(`//a[text()='Edit']`).click()
    await page.locator(`#updateLeadForm_companyName`).fill('updated company name')
    await page.locator(`#updateLeadForm_annualRevenue`).fill('9999999')
    await page.locator(`#updateLeadForm_departmentName`).fill('updated QA')
    await page.locator(`#updateLeadForm_description`).fill('Description')
    await page.locator(`(//input[@name='submitButton'])[1]`).click()
    //Assertion
    expect(page.locator(`#viewLead_companyName_sp`)).toContainText('updated company name')
    expect(page.locator(`#viewLead_annualRevenue_sp`)).toContainText('9,999,999')
    expect(page.locator(`#viewLead_departmentName_sp`)).toHaveText('updated QA')
    expect(page.locator(`#viewLead_description_sp`)).toHaveText('Description')


})



