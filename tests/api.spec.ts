import { test, expect } from '@playwright/test';

test('Get user API', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/users');

    console.log('STATUS:', response.status());
    
    const body = await response.json();
    console.log(body);

    expect(response.status()).toBe(200);
    expect(body[0].name).toBe('Krishna');
});