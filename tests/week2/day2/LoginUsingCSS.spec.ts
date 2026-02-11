//CSS Usage
/* id
#username
[id='username']
div[id = 'username']

class
.decorativeSubmit
.asdf.3tdsf.sdfds.sdf (use '.' to replace the spaces in the class attribute's value)

link text
text='crmsfa'
*/

import test from "@playwright/test";

test('Login only using css selectors', async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("DemoSalesManager")
    await page.locator(".inputLogin").last().fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()
    await page.waitForTimeout(5000);
    const title = await page.title();
    console.log("Page title is: " + title)
})