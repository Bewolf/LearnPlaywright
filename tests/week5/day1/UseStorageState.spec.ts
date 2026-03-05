import test from "@playwright/test";

test.use({ storageState: "helper/SF_Login.json" })
test('Using created Storage state', async ({ page }) => {
    await page.goto(`https://testleaf.lightning.force.com/lightning/page/home`)
    await page.locator(`.slds-button.slds-context-bar__button.slds-icon-waffle_container.slds-show`).click()

})

test('Using created Storage state2', async ({ page }) => {
    await page.goto(`https://testleaf.lightning.force.com/lightning/page/home`)
    await page.locator(`.slds-button.slds-context-bar__button.slds-icon-waffle_container.slds-show`).click()

})