import {test, expect} from '@playwright/test';

test('failing demo', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
});