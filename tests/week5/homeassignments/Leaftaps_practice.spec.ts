import test from "@playwright/test";
import dotenv from 'dotenv'
import { parse } from "csv-parse/sync";
import fs from 'fs';
import editLead from '../../../data/EditLead.json'

dotenv.config({ path: 'environment/leaftaps_qaLogin.env' })

const readValue: any[] = parse(fs.readFileSync("data/CreateLead.csv"), {
    columns: true,
    skip_empty_lines: true
})


test.beforeEach('Login', async ({ page }) => {
    let url = process.env.url as string
    let username = process.env.uname as string
    let password = process.env.password as string
    await page.goto(url);
    await page.locator("#username").fill(username)
    await page.locator(".inputLogin").last().fill(password)
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()
})

for (const data of readValue) {
    test(`Test case id: ${data.testID} Create lead`, async ({ page }) => {
        await page.locator(`text='Create Lead'`).first().click()
        await page.locator(`#createLeadForm_companyName`).fill(data.companyName)
        await page.locator("#createLeadForm_firstName").fill(data.firstName)
        await page.locator("#createLeadForm_lastName").fill(data.lastName)
        await page.locator("#createLeadForm_personalTitle").fill(data.title)
        await page.locator("#createLeadForm_generalProfTitle").fill(data.profTitle)
        await page.locator("#createLeadForm_annualRevenue").fill(data.revenue)
        await page.locator("#createLeadForm_departmentName").fill(data.department)
        await page.locator("#createLeadForm_primaryPhoneNumber").fill(data.phone)
        await page.locator(`[name='submitButton']`).click()
    })
}

let data = editLead[0]
test('Edit Lead', async ({ page }) => {
    await page.locator(`//a[text()='Leads']`).click()
    await page.locator(`//a[text()='Find Leads']`).click()
    await page.locator(`(//input[@name='firstName'])[3]`).fill(data.firstName)
    await page.getByRole('button', { name: 'Find Leads' }).click()
    await page.locator(`((//div[text()='Lead ID']/ancestor::table/following::table)[1]//a)[1]`).click()
    await page.locator(`//a[text()='Edit']`).click()
    await page.locator(`#updateLeadForm_companyName`).fill(data.companyName)
    await page.locator(`#updateLeadForm_departmentName`).fill(data.departmentName)
    await page.locator(`#updateLeadForm_description`).fill(data.description)
    await page.locator(`(//input[@name='submitButton'])[1]`).click()
})
