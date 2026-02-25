import test from "@playwright/test";

//here along with pagefixture, context fixture will also be used (multiple window handling)
test('Handling window', async ({ page, context }) => {
    //await page.goto(`https://www.leafground.com/window.xhtml`)

    //First we need to switch from Parent window to child window to interact with element in the child window.

    await page.goto(`https://www.amazon.in`)
    const data = await page.locator(`#twotabsearchtextbox`)
    await data.fill("iphone")
    await data.press('Enter')

    //Create a promise. I'm asking the page to wait but this wait will have to happen after I perform the click action.
    const parentWindow = page.context().waitForEvent('page')

    //Perform the action
    await page.locator(`//span[contains(text(), 'iPhone 17 Pro Max')]`).first().click()

    //resolve the promise by catching the event
    const childWindow = await parentWindow

    //child window
    const price = await childWindow.locator(`(//span[@class='a-price-whole'])[5]`).innerText()
    console.log("Price is: " + price)

    //closing the child window will take the focus back to parent window.
})