import test from "@playwright/test";

test('dropdowns', async ({ page }) => {
    await page.goto("https://www.telerik.com/contact");

    await page.selectOption('#Dropdown-1', { value: 'Renewal' })
    await page.selectOption('#Dropdown-2', { label: 'KendoReact' })
    await page.selectOption(`[name='DynamicListFieldController']`, { index: 1 })
    await page.selectOption('.js-states-drop-down', { index: 3 })

    await page.waitForTimeout(3000);

})