import { LoginPage } from "./LoginPage";


export class CRMPage extends LoginPage {

    async clickCRMSfa() {
        await this.page.locator(`text='CRM/SFA'`).click()
    }
}