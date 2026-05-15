import { APIRequestContext } from "@playwright/test";

export class UserAPI {

    private headers = {
        'Content-Type': 'Application/json',
        'Accept': 'Application/json',
        'Authorization': 'Bearer fake-token-123'
    };

    constructor(private request: APIRequestContext) {}

    async getUsers() {
        return this.request.get(
            'https://jsonplaceholder.typicode.com/users',
            {
                headers: this.headers,
            }
        );
    }

    async createUsers(userData: object) {
        return this.request.post(
            'https://jsonplaceholder.typicode.com/users',
            {
                data: userData,
            }
        );
    }

    async updateUser(userId: number, userData: object) {
        return this.request.put(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            {
                data: userData,
            }
        );
    }

    async removeUser(userID: number) {
        return this.request.delete(
            `https://jsonplaceholder.typicode.com/${userID}`
            );
    }

    async getHeaders() {
        return this.request.get(
            'https://httpbin.org/headers',
            {
                headers: this.headers,
            }
        );
    }
}