//const { test, expect } = require('@playwright/test');

const {test, expect} = require('@playwright/test');


test('Soft Assertion Test', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

   // await expect(page).toHaveURL('https://www.demoblaze.com/');

     await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // Assert page title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
})