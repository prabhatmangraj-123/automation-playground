import { BaseAPI } from "./BaseAPI";

export class AuthAPI extends BaseAPI {
    async login() {

        const response = await this.request.post(
            'https://reqres.in/api/login',
            {
                headers: {
                    'x-api-key': 'free_user_3DrLL48PcV1th0Kt97AsTweSXov'
                },
                data: {
                    email: 'eve.holt@reqres.in',
                    password: 'cityslicka'
                }
            }
        );

        const body = await response.json();

        BaseAPI.token = body.token;

        return response;

    }
}