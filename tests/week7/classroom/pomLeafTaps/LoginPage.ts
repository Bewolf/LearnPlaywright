import { Page } from "@playwright/test";

export class LoginPage {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async launchApp() {
        await this.page.goto("http://leaftaps.com/opentaps/control/main");

    }

    async enterUsername() {
        await this.page.locator("#username").fill("DemoSalesManager")
    }

    async enterPassword() {
        await this.page.locator(".inputLogin").last().fill("crmsfa")
    }

    async clickLogin() {
        await this.page.locator(".decorativeSubmit").click()
    }
}