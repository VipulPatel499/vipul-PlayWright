// const {test, expect} = require('@playwright/test')
// test('AssertionsTest', async ({page})=>{
//     // open app URL
//     await page.goto('https://demo.nopcommerce.com/register')
//     //expect (page) to.HaveURL() Page has URL
//     await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
//     // page has title
//     await expect(page).toHaveTitle('nopCommerce demo store. Register')

// })

const { test, expect } = require('@playwright/test');

test('AssertionsTest', async ({ page }) => {
    // Open the registration page
    await page.goto('https://demo.nopcommerce.com/register');

    // 1. Assert page URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // 2. Assert page title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // 3. Assert visibility of the Register button
    const registerButton = page.locator('#register-button');
    await expect(registerButton).toBeVisible();

    // 4. Assert First Name input is empty
    const firstNameInput = page.locator('#FirstName');
    await expect(firstNameInput).toHaveValue('');

    // 5. Assert Last Name input is empty
    const lastNameInput = page.locator('#LastName');
    await expect(lastNameInput).toHaveValue('');

    // 6. Assert Email input is empty
    const EmailInput = page.locator('#Email')
    await expect(EmailInput).toHaveValue('');

      // 7. Assert Gender radio button exists   ========================> To have count 1 ? 
      const genderMaleRadio = page.locator('#gender-male');
      await expect(genderMaleRadio).toHaveCount(1);

        const genderFeMaleRadio = page.locator('#gender-female')
        await expect(genderFeMaleRadio).toHaveCount('2');




    // 1. Assert that the "Your Personal Details" section is visible
    const personalDetailsHeader = page.locator('.page-title');
    await expect(personalDetailsHeader).toContainText('Register');

    // 2. Assert that the Email input has correct placeholder
    const emailInput = page.locator('#Email');
    await expect(emailInput).toHaveAttribute('type', 'email');

    // 3. Assert that the Newsletter checkbox is checked by default
    const newsletterCheckbox = page.locator('#Newsletter');
    await expect(newsletterCheckbox).toBeChecked();

    // 4. Assert that the Country dropdown contains "India"
    const countryDropdown = page.locator('#CountryId');
    await expect(countryDropdown).toContainText('India');

    // 5. Assert that the Register button is enabled
    const registerButton1 = page.locator('#register-button');
    await expect(registerButton).toBeEnabled();

});