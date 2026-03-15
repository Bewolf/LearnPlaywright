import { Page } from "@playwright/test";

export class LoginPage {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async launchApp() {
        await this.page.goto("https://login.salesforce.com/")
    }

    async enterUsername() {
        await this.page.getByLabel('Username').fill("dilipkumar.rajendran@testleaf.com")
    }

    async enterPassword() {
        await this.page.getByLabel("password").last().fill("TestLeaf@2025")
    }

    async clickLogin() {
        await this.page.locator("#Login").click()
    }
}