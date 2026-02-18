import test, { expect } from "@playwright/test";

test('Auto retry - assertion', async ({ page }) => {

    await page.goto('https://www.leafground.com/input.xhtml');

    const isEnabled = page.getByPlaceholder("Babu Manickam")
    //hard assert. On failure next line wont be executed.
    //And this is also Auto-retrying assert. 
    //Default time of auto rerty is 5 seconds.
    await expect(isEnabled).toBeDisabled()
    //overrriding the default time limit of 5 seconds 
    await expect(isEnabled).toBeDisabled({ timeout: 10000 })

    //soft assert
    //Even if line fails, the next line of code will be executed and continued further.
    await expect.soft(isEnabled).toBeDisabled()
    console.log("Execution continued after soft assert")//This line will be printer even if previous line fails

})

//using test.only - to run only this test
test.only('Non-retry - assertion', async ({ page }) => {

    await page.goto('https://www.leafground.com/input.xhtml');
    //await not required as there is no promise involed in this
    const title = await page.title()
    expect(title).toEqual("Input Components")

    //soft assertion
    expect.soft(title).toEqual("Input Comp")
    console.log("Execution continued after soft assert")//This line will be printer even if previous line fails
})

