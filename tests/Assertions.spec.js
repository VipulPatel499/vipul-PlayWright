const {test, expect} = require('@playwright/test')
test('AssertionsTest', async ({page})=>{
    // open app URL
    await page.goto('https://demo.nopcommerce.com/register')
    //expect (page) to.HaveURL() Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    // page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

})
