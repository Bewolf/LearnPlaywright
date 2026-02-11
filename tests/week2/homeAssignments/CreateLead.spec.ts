import { test } from "@playwright/test";

test('Create lead', async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("DemoSalesManager")
    await page.locator(".inputLogin").last().fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()
    await page.locator(`text='Create Lead'`).first().click()
    await page.locator(`[name='companyName']`).fill("ABC")
    await page.locator("#createLeadForm_firstName").fill("ARFirstName")
    await page.locator("#createLeadForm_lastName").fill("ARLastName")
    await page.locator("#createLeadForm_personalTitle").fill("MR.")
    await page.locator("#createLeadForm_generalProfTitle").fill("SR Lead")
    await page.locator("#createLeadForm_annualRevenue").fill("1000000")
    await page.locator("#createLeadForm_departmentName").fill("QA")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210")
    await page.locator(`[name='submitButton']`).click()
})