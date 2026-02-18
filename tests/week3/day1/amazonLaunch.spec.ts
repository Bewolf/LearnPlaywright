import test from "@playwright/test";


test('Amazon', async ({ page }) => {
    await page.goto("https://www.amazon.com");
    await page.locator(`#twotabsearchtextbox`).fill('iphone')
    await page.locator('#nav-search-submit-button').press('Enter')
    await page.locator(`//span[contains(text(),'512 GB & above')]`).click()
    await page.locator(`(//button[contains(text(),'Add to cart')])[1]`).click()



})