import { test, expect } from '@playwright/test';

test.beforeAll(async () => {

  console.log('🚀 STARTING TEST SUITE');
});

test.beforeEach(async ({ page }) => {

  console.log('🌐 Opening website...');

  await page.goto('https://www.saucedemo.com/');
});

test.afterEach(async () => {

  console.log('✅ Test completed');
});

test.afterAll(async () => {

  console.log('🏁 ALL TESTS FINISHED');
});

test('Login button should be visible', async ({ page }) => {

  await expect(page.locator('#login-button'))
    .toBeVisible();
});

test('Page title should contain Swag Labs', async ({ page }) => {

  await expect(page)
    .toHaveTitle(/Swag Labs/);
});