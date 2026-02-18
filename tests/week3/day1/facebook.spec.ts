import test from "@playwright/test";


test('Amazon', async ({ page }) => {
    await page.goto("https://www.facebook.com");
    await page.getByLabel('Email address or phone number').fill('abc');
    await page.getByTestId('royal-pass').fill('abc');
    await page.waitForTimeout(2000)

})