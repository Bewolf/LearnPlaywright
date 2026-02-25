/*
Handling frames with,
index
FrameLocator
FrameObject
*/

import test from "@playwright/test";

test('Handling frame using index', async ({ page }) => {

    await page.goto('https://www.leafground.com/frame.xhtml')

    //To get number of frames
    //Playwright Main page is considered as first frame
    const frames = page.frames();
    console.log("Number of frames in the page: " + frames.length)//This will give frame count +1, because the main page is also considered as frame.

    //Frame index starts from 0.
    //so indext 0 has main page, index 1 has 1st frame, 2 has 2nd frame and so on

    //Moving directly to frame and then to it element directly.
    const frame1 = frames[1]
    await frame1.locator('#Click').click() //This clicks the element present inside the first frame (index 1 of frames)
    await page.waitForTimeout(3000)

    //directly we can go to the inner frame without switching like in Selenium.
    //Also, for coming out of frame we dont need to switch
    //Simple use the frame index and click the elements present inside the frame.
    await frames[4].locator('#Click').click()
    await page.waitForTimeout(3000)
})

test('Handling frame using locator', async ({ page }) => {

    await page.goto('https://www.leafground.com/frame.xhtml')
    await page.frameLocator(`(//iframe)[1]`).locator(`#Click`).click()
    await page.waitForTimeout(3000)

    //For nested frame, if we use frame locator, it has to be switched one by one.
    await page.frameLocator(`(//iframe)[3]`).frameLocator(`//iframe[@id='frame2']`).locator(`#Click`).click()
    await page.waitForTimeout(3000)
})

test.only('Handling frame using frame object', async ({ page }) => {

    await page.goto('https://www.leafground.com/frame.xhtml')
    //can use name or the url.

    //here I have used url.  Dom element:  #document (https://www.leafground.com/default.xhtml)
    //return type of frame() is null or frame, it is optional, so question mark is given
    /*? --> means optional */
    await page.frame({ url: 'https://www.leafground.com/default.xhtml' })?.locator(`#Click`).click()
    await page.waitForTimeout(3000)

    //using name attribute
    await page.frame({ name: 'frame2' })?.locator(`#Click`).click()
    await page.waitForTimeout(3000)
})