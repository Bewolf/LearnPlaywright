import test from '@playwright/test'

test("Test Method", async ({ page }) => {

    await page.goto("https://www.google.com")
    console.log(await page.title())
})

// test.only("Test Only",async({page})=>{
//      await page.goto("https://www.facebook.com")
//     console.log(await page.title())
// })


test.skip("Test skip", async ({ page }) => {
    await page.goto("https://www.facebook.com")
    console.log(await page.title())
})


test.fail(`SF Login  Test Fail`, async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("#username").fill("dilip@testleaf.com")

    await page.locator("#password").fill("Testleaf")

    await page.locator("#Login").click()

})

test.fixme("Test Fixme", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("DemoSalesManager")
    await page.locator(".inputLogin").last().fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    const pageTitle = await page.title()
    console.log(pageTitle)

    await page.waitForTimeout(4000)

})


test("Test info", async ({ page }) => {

    test.info().annotations.push({ type: 'Testing', description: "Smoke testing" },
        { type: 'author', description: 'Dilip' }
    )

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("DemoSalesManager")
    await page.locator(".inputLogin").last().fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    const pageTitle = await page.title()
    console.log(pageTitle)

    await page.waitForTimeout(4000)

})