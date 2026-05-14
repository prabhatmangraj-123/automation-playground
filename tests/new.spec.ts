// tests/example.spec.ts

import { test, expect } from '../fixtures/baseTest.js';

test('user is already logged in', async ({ page }) => {
  await page.goto('/inventory.html');

  await expect(page.locator('.title'))
    .toHaveText('Products');
});