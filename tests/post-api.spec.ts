import { test, expect } from '@playwright/test';


test('Create new user', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users',
    {
        data: {
            name: 'Prabhat',
            job: 'Automation Tester'
        }
    }
);

console.log('STATUS:', response.status());

const body = await response.json();

console.log(body);

expect(response.status()).toBe(201);
expect(body.name).toBe('Prabhat');
expect(body.job).toBe('Automation Tester');
});