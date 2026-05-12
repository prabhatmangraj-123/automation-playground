import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';


setup('authenticate', async ({ page }) => {
   
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  console.log('USERNAME =', process.env.SWAG_USERNAME);
console.log('PASSWORD =', process.env.SWAG_PASSWORD);

  await loginPage.login(
    process.env.SWAG_USERNAME!,
    process.env.SWAG_PASSWORD!
  );
  
  
  //await page.goto('https://www.saucedemo.com/');

   //wait page.locator('#user-name').fill('standard_user');
   //await page.locator('#password').fill('secret_sauce');
   //await page.locator('#login-button').click();

    // ✅ robust locator
  //await page.locator('button[type="submit"]').click();

  // ✅ wait for redirect
   //await Promise.all([
    //page.waitForURL('**/inventory.html'), 
    //page.locator('#login-button').click(),
  //]);

   // ✅ VERIFY LOGIN SUCCESS
   // ✅ verify login success
  //await expect(page.locator('.title')).toHaveText('Products');

    // ✅ verify we are REALLY on secure page
 /* await expect(page).toHaveURL(/.*secure/);
  await expect(page.locator('#flash'))
    .toContainText('You logged into a secure area!');*/

   
   // Save login state
   await page.context().storageState({ path: 'auth.json'});

   //console.log(await page.context().cookies());
});
