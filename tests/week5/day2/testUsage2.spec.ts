import test from '@playwright/test'

test.describe("Smoke tesing", () => {

    //test.describe.configure({ mode: 'default' })
    //test.describe.configure({ mode: 'serial' })
    test.describe.configure({ mode: 'parallel' }) //this will overrride the parallel config in the config file

    test("Test Describe1", async ({ page }) => {

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

    test("Test Describe2", async ({ page }) => {

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

    test("Test Describe3", async ({ page }) => {

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

})