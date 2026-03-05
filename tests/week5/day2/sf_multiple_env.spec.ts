import test from "@playwright/test";
import dotenv from 'dotenv'

const fileToRead = process.env.EnvFile
//we can also use  OR condition if environment is not set, like below
//const fileToRead = process.env.EnvFile || "sf_devLogin"
dotenv.config({ path: `environment/${fileToRead}.env` })

test(`Sales force login by passing data from multiple .env`, async ({ page }) => {
    let url = process.env.url as string
    let username = process.env.uname as string
    let password = process.env.password as string
    await page.goto(url);
    await page.getByLabel('Username').fill(username)
    await page.getByLabel("password").last().fill(password)
    await page.locator("#Login").click()
})

//run below command to set the .env files before running spec file
// $env:EnvFile="sf_qaLogin"
//or to run dev .env execute below command and run the spec file
// $env:EnvFile="sf_devLogin"

//To unset run below command
//$env:EnvFile=""