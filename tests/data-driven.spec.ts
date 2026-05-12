import {test, expect} from '@playwright/test';
//import users from './users.json' with { type: 'json' };

import fs from 'fs';
const users = JSON.parse(fs.readFileSync('./tests/users.json', 'utf-8'));

//const users = require('./users.json');

for (const user of users) {
    test(`Login test for ${user.username}`, async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        
        await page.locator('#user-name').fill(user.username);
        await page.locator('#password').fill(user.password);

        await page.locator('#login-button').click();
        await expect(page.locator('.title')).toHaveText('Products');
    });
}