import test from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs';

const readValue: any[] = parse(fs.readFileSync("data/sf_login.csv"), {
    columns: true,
    skip_empty_lines: true
})

for (const data of readValue) {
    test(`Test case id: ${data.testID} Sales force login by passing data from CSV`, async ({ page }) => {
        await page.goto("https://login.salesforce.com/");
        await page.getByLabel('Username').fill(data.username)
        await page.getByLabel("password").last().fill(data.password)
        await page.locator("#Login").click()
    })
}