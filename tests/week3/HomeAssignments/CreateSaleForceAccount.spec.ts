import test, { chromium, expect } from "@playwright/test";

test('Login only using css selectors', async ({ page }) => {

    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").last().fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(3000)
    const title = await page.title();
    expect(title).toEqual('Lightning Experience')
    const url = page.url();
    expect(url).toContain('https://testleaf.lightning.force.com')
    await page.locator(`.slds-button.slds-context-bar__button.slds-icon-waffle_container.slds-show`).click()
    await page.getByText(`View All`).last().scrollIntoViewIfNeeded()
    await page.getByText(`View All`).last().click()
    await page.getByPlaceholder('Search apps or items...').fill('Service')
    await page.locator(`(//mark[text()='Service'])[1]`).click()
    await page.locator(`[title='Accounts']`).click()
    await page.getByRole('button', { name: 'New' }).click()
    await page.locator(`[name='Name']`).fill('Test value account')
    await page.locator(`//button[@name='SaveEdit']`).click()
    expect(page.locator(`.toastMessage.slds-text-heading--small.forceActionsText`)).toBeVisible()


})