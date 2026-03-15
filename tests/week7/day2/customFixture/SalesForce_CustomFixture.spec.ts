import { customTest } from './CustomFixture'

customTest("Sales force with custom fixture", async ({ loginPage }) => {
    await loginPage.locator(`//span[text()='Leads']`).click()
    await loginPage.waitForTimeout(2000)
})