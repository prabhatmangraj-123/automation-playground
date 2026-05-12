import { test, expect } from '../fixtures/baseTest';

test('user adds backpack to cart', async ({ page, inventoryPage }) => {
    await page.goto('/inventory.html');
    

    await inventoryPage.verifyProductsPage();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.verifyCartCount('1');
}); 