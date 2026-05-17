import { BaseAPI } from './BaseAPI';

export class UserAPI extends BaseAPI {


    async getUsers() {
        return this.request.get(
            'https://jsonplaceholder.typicode.com/users',
            {
                headers: this.getHeaders(),
            }
        );
    }

    async createUsers(userData: object) {
        return this.request.post(
            'https://jsonplaceholder.typicode.com/users',
            {
                headers: this.getHeaders(),
                data: userData,
            }
        );
    }

    async updateUser(userId: number, userData: object) {
        return this.request.put(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            {
                headers: this.getHeaders(),
                data: userData,
            }
        );
    }

    async removeUser(userID: number) {
        return this.request.delete(
            `https://jsonplaceholder.typicode.com/users/${userID}`,
            {
                headers: this.getHeaders(),
            }
            );
    }
}