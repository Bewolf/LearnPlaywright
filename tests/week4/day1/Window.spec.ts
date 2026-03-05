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


test.only('Handling Multiple window', async ({ page, context }) => {
    await page.goto(`https://www.leafground.com/window.xhtml`)

    await Promise.all([
        // page.context().waitForEvent('page'), instead of this line we can use context fixture (in line 31)
        context.waitForEvent('page'),
        await page.locator(`//span[text()='Open Multiple']`).click()
    ])

    const allPages = context.pages()
    const windowCount = allPages.length
    console.log("Window count: " + windowCount)

    //title for resolve the promise
    let webtable: any
    let dashboard: any

    for (let i = 0; i < windowCount; i++) {
        const windowTitle = await allPages[i].title()
        console.log(windowTitle)
        if (windowTitle === 'Web Table') {
            //resolve the promise
            webtable = allPages[i]
        } else if (windowTitle === 'Dashboard') {
            dashboard = allPages[i]
        }
        await page.waitForTimeout(2000)
    }

    //action can be performed in the child window
    await webtable.getByPlaceholder('Search...').fill('Italy')
    await dashboard.locator('#email').fill('username')
    await page.waitForTimeout(6000)
    //come back to main page without closing the child window.
    //This bringToFront is just to bring the window visually and this is optional if you want it in front.
    //And using page you can interact with main window and using webtable or dashboard we can interact with child windows.
    await page.bringToFront()
    await page.locator(`//span[text()='Open Multiple']`).click()
    await page.waitForTimeout(6000)

})