import { test, expect } from '@playwright/test';
import { UserAPI } from '../../api/UserAPI.js';
import { newUser } from '../../test-data/userData.js';
import { request } from 'node:http';




test('Get users API', async ({ request}) => {

    const userAPI = new UserAPI(request);

    const response = await userAPI.getUsers();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body[0].name).toBe('Leanne Graham');
    console.log(body);
});

test('Create user API', async ({ request }) => {
    const userAPI = new UserAPI(request);
    
    const response = await userAPI.createUsers(newUser);
    
    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe(newUser.name);
    expect(body.job).toBe(newUser.job);
    console.log(body);
});

test('Update user API', async ({request}) => {

    const userAPI = new UserAPI(request);

    const response = await userAPI.updateUser(1, newUser);
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();

    expect(body.name).toBe(newUser.name);
    console.log(body);
});

test('Remove user API', async ({ request }) => {

    const userAPI = new UserAPI(request);

    const response = await userAPI.removeUser(1);

    expect(response.status()).toBe(404);
    
    expect(response.ok()).toBeFalsy();
});

test('Verify headers', async ({ request }) => {

    const userAPI = new UserAPI(request);

    const response = await userAPI.getHeaders();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.headers.Authorization).toContain('Bearer');

    expect(body.headers.Accept).toBe('Application/json');

    console.log(body);
});