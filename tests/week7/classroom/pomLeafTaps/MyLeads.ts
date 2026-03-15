import { HomePage } from "./HomePage"


export class MyLeads extends HomePage {

    async clickCreateLead() {
        await this.page.locator(`text='Create Lead'`).first().click()
    }
}