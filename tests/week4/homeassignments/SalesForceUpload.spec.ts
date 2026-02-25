import test, { chromium, expect } from "@playwright/test";
import path from "path";

test('Login only using css selectors', async ({ page }) => {

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel('Username').fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("password").last().fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.locator(`.slds-button.slds-context-bar__button.slds-icon-waffle_container.slds-show`).click()
    await page.getByText(`View All`).last().scrollIntoViewIfNeeded()
    await page.getByText(`View All`).last().click()
    await page.getByPlaceholder('Search apps or items...').fill('Accounts')
    await page.locator(`(//mark[text()='Accounts'])[1]`).click()
    await page.getByRole('button', { name: 'New' }).click()
    await page.locator(`[name='Name']`).fill('AR account')
    await page.locator(`(//button[contains(@id,'combobox-button')])[1]`).click()
    await page.getByText('Prospect').click()
    await page.locator(`(//button[contains(@id,'combobox-button')])[2]`).click()
    await page.locator(`//span[text()='Banking']`).click()
    await page.locator(`//button[@name='SaveEdit']`).click()
    await expect(page.locator(`.toastMessage.slds-text-heading--small.forceActionsText`)).toBeVisible()

    const fileChooser = page.waitForEvent('filechooser')
    await page.locator(`//span[contains(text(),'Upload Files')]`).click()

    const catchEvent = await fileChooser
    catchEvent.setFiles(path.join(__dirname, '../../../uploadFile/Sample_file.pdf'))
    await page.locator(`//span[contains(text(),'Done')]`).click()

    await expect(page.locator(`(//span[contains(text(),'Sample_file')])[2]`)).toContainText('Sample_file')
    await page.waitForTimeout(3000)


})