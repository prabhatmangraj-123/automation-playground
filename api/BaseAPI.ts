import { APIRequestContext } from "@playwright/test";

export class BaseAPI {

    static token: string;

    constructor(protected request: APIRequestContext) {}

    protected getHeaders() {
        return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${BaseAPI.token}`
    };
  } 
}