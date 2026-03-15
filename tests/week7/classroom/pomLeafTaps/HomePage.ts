import { CRMPage } from "./CRMPage";

export class HomePage extends CRMPage {

    async clickOnLeads() {
        await this.page.locator("//a[text()='Leads']").click()
    }
    async clickOnCases() {
        await this.page.locator("//a[text()='Cases']").click()
    }
    async clickOnAccounts() {
        await this.page.locator("//a[text()='Accounts']").click()
    }

}