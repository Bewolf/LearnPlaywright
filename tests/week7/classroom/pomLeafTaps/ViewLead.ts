import { CreateLead } from "./CreateLead";

export class ViewLeads extends CreateLead {
    async verifyCreatedLead() {
        await this.page.locator(`#viewLead_companyName_sp`).isVisible()
    }
}