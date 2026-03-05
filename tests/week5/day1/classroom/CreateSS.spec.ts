import test from "@playwright/test";

test('Create SS for leaf taps', async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("DemoSalesManager")
    await page.locator(".inputLogin").last().fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()

    await page.context().storageState({ path: 'helper/leaftap.json' })
})

test('Create SS for leaf taps2', async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("DemoCsr2")
    await page.locator(".inputLogin").last().fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()

    await page.context().storageState({ path: 'helper/leaftap2.json' })
})