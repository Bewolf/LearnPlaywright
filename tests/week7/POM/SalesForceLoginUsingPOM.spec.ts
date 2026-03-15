import test from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";

test(`Login to sales force using POM`, async ({ page }) => {
    let homePage = new HomePage(page);
    await homePage.launchApp()
    await homePage.enterUsername()
    await homePage.enterPassword()
    await homePage.clickLogin()
    await homePage.clickLeads()
})