import test from "@playwright/test";

//To use globaly for all the test then it has to used like this
test.use({ storageState: 'helper/leaftap.json' })
test('Use SS for leaf taps using demosalesmanager', async ({ page }) => {
    await page.goto('http://leaftaps.com/crmsfa/control/myHomeMain')
    await page.locator(`text='Create Lead'`).first().click()
})

test('Use SS for leaf taps using democsr', async ({ page }) => {
    await page.goto('http://leaftaps.com/crmsfa/control/myHomeMain')
    await page.locator(`text='Create Lead'`).first().click()
})

//to use it specific to the test, then use test.describe 
test.describe('Storage state - Specific to test', () => {
    test.use({ storageState: 'helper/leaftap2.json' });

    test('Use SS for leaf taps', async ({ page }) => {
        await page.goto('http://leaftaps.com/crmsfa/control/myHomeMain');
        await page.locator(`text='Create Lead'`).first().click();
    });
});