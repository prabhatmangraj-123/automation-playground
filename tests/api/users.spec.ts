import { test, expect, request, APIRequestContext } from '@playwright/test';
import { UserAPI } from '../../api/UserAPI';
import { newUser } from '../../test-data/userData';
import { userSchema } from '../../schemas/userSchema';


let apiContext: APIRequestContext;
let userAPI: UserAPI;

test.beforeAll(async () => {
    apiContext = await request.newContext();
    userAPI = new UserAPI(apiContext);
});

test.afterAll(async () => {
    await apiContext.dispose();
});




test('Get users API', async () => {


    const response = await userAPI.getUsers();

    expect(response.status()).toBe(200);

    const body = await response.json();

    //expect(body[0].name).toBe('Leanne Graham');
    //console.log(body);
    userSchema.parse(body[0]);
});

test('Create user API', async () => {
    
    const response = await userAPI.createUsers(newUser);
    
    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe(newUser.name);
    expect(body.job).toBe(newUser.job);
    console.log(body);
});

test('Update user API', async () => {

    const response = await userAPI.updateUser(1, newUser);
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();

    expect(body.name).toBe(newUser.name);
    console.log(body);
});

test('Remove user API', async () => {

    const response = await userAPI.removeUser(1);

    expect(response.status()).toBe(200);
    
    expect(response.ok()).toBeTruthy();
});