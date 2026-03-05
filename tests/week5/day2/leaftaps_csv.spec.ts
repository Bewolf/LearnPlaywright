import test from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs';

const readValue: any[] = parse(fs.readFileSync("data/leaftaps_login.csv"), {
    columns: true,
    skip_empty_lines: true
})

for (const data of readValue) {
    test(`Test case id: ${data.testID} Leaf taps login by passing data from CSV`, async ({ page }) => {
        await page.goto("http://leaftaps.com/opentaps/control/main");
        await page.locator("#username").fill(data.username)
        await page.getByLabel("password").last().fill(data.password)
        await page.locator(".decorativeSubmit").click()
        await page.locator(`text='CRM/SFA'`).click()
    })
}