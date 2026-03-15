import { MyLeads } from "./MyLeads";

export class CreateLead extends MyLeads {

    async enterFirstName() {
        await this.page.locator("#createLeadForm_firstName").fill("Aravind")
    }

    async enterLastName() {
        await this.page.locator("#createLeadForm_lastName").fill("V")
    }

    async enterCompanyName() {
        await this.page.locator(`#createLeadForm_companyName`).fill("ABC")
    }

    async selectSource() {
        await this.page.selectOption('#createLeadForm_dataSourceId', { value: 'LEAD_CONFERENCE' })
        await this.page.waitForTimeout(5000)
    }

    async clickSubmit() {
        await this.page.locator(`[name='submitButton']`).click()
    }
}