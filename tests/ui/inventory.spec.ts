import { test, expect } from '../../fixtures/baseTest';

test('user is already logged in', async ({ page, inventoryPage }) => {

  await page.goto('/inventory.html');

  await expect(inventoryPage.title)
    .toHaveText('Products');

});