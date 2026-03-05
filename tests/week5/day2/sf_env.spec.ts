import test from "@playwright/test";
import dotenv from 'dotenv'

dotenv.config({ path: 'environment/sf_qaLogin.env' })

test(`Sales force login by passing data from .env`, async ({ page }) => {
    let url = process.env.url as string
    let username = process.env.uname as string
    let password = process.env.password as string
    await page.goto(url);
    await page.getByLabel('Username').fill(username)
    await page.getByLabel("password").last().fill(password)
    await page.locator("#Login").click()
})
