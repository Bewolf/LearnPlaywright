import test from '@playwright/test'


test("Multiple Window Handling", async ({ page, context }) => {


    //Promise.all[create event , do the action ]


    await page.goto("https://www.leafground.com/window.xhtml")


    const [windowInfo] = await Promise.all([
        //create promise
        context.waitForEvent('page'),
        //action to perform
        await page.locator("//span[text()='Open Multiple']").click()
    ])


    const windowCount = windowInfo.context().pages()
    //parent ch1,ch2
    console.log(windowCount.length)


    //title for resolve the promise
    let webtable: any
    let dashboard: any


    for (let i = 0; i < windowCount.length; i++) {


        //print the title
        const windowTitle = await windowCount[i].title()
        // console.log(windowTitle)
        // await page.waitForTimeout(4000)
        //Web Table
        //Dashboard
        //resolve the promise with help the title


        if (windowTitle === 'Web Table') {
            //resolve the promise
            webtable = windowCount[i]
        } else if (windowTitle === 'Dashboard') {
            dashboard = windowCount[i]
        }
    }


    //action can be perform in the child window
    //parent and child window
    //await webtable.getByPlaceholder("Search...").fill("Italy")
    await webtable.getByPlaceholder('Search...').fill('Italy')


    await dashboard.waitForTimeout(5000)
    await dashboard.locator('#email').fill("dilip@testleaf.com")



    await page.locator("//span[text()='Open']").click()
    //come back to main page without close the child window
    //await page.bringToFront()


})