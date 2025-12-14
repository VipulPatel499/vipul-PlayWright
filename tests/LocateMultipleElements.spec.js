//LocatMultpleElements
// const { test, expect } = require('@playwright/test')

// test('LocatMultpleElements', async ({page})=>{
//     await page.goto('https://demoblaze.com/index.html');
//     // const links = await page.$$('a');
//     // for(const link of links)
//     // {
//     //     const linktext= await link.textContent();
//     //     console.log(linktext);
//     // }
//     //locate all the products displayed on home pahe

//     //page.waitForSelector("//div[@id='tbodyid']//h4/a");
//     const items = await page.$$("//div[@id='tbodyid']//h4/a");
//     for (const item of items) {
//         const itemName= await item.textContent();
//         console.log(itemName);
//     }
// });



const { test, expect } = require('@playwright/test');
test('Locate Multiple Elements', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  // Wait for the products to be loaded
  await page.waitForSelector('#tbodyid .card-title a');
  // Locate all product elements
  const items = await page.$$('#tbodyid .card-title a');
  console.log(`Number of products found: ${items.length}`);
  for (const item of items) {
    const itemName = await item.textContent();
    console.log(itemName.trim());
  }
});
const { test, expect } = require('@playwright/test');
test('Home Page', async ({page})=>{
    await page.goto('https://demoblaze.com/');
    const pageTitle=page.title();
    console.log('Page title is:', pageTitle);
    await expect(page).toHaveTitle('STORE');
    const pageURL=page.url();
    console.log('Page URL is:', pageURL);
    await expect(page).toHaveURL('https://demoblaze.com/')
    await page.close();
})
