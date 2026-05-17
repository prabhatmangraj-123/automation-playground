import { test, expect, request, APIRequestContext } from '@playwright/test';
import { AuthAPI } from '../../api/AuthAPI';

let apiContext: APIRequestContext;
let authAPI: AuthAPI;

test.beforeAll(async () => {
    apiContext = await request.newContext();

    authAPI = new AuthAPI(apiContext);
});

test.afterAll(async () => {
    await apiContext.dispose();
});

test('Generate auth token', async () => {
    const response = await authAPI.login();
    
    console.log(await response.json());
    expect(response.status()).toBe(200);

    const body = await response.json();
    
    
    expect(body.token).toBeTruthy();
});