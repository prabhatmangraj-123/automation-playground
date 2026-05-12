import { test, expect } from '@playwright/test';

test('Delete entire data', async ({ request }) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/users/1'
    );

    console.log('STATUS:', response.status());
    

    expect(response.status()).toBe(200);
    //expect(body.job).toBe('Teaching Automation to Prabhat');

});