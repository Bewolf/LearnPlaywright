import { LoginPage } from "./LoginPage";

export class HomePage extends LoginPage {

    async clickLeads() {
        await this.page.locator(`//span[text()='Leads']`).click()
        await this.page.waitForTimeout(2000)
    }
}