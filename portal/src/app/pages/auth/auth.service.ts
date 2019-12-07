import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Service to authentication
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

    /** base url of DGIBack */
    private urlDGIBack = window['__env'].urlDGIBack;

    /** start http service client */
    constructor(private http: HttpClient) {
    }

    /**
     * login in DPI DGIBack
     */
    public async login(credentials: object): Promise<any> {
        const urlSuffix = `/auth/login`;
        const response = await this.http.post(`${this.urlDGIBack}${urlSuffix}`, credentials).toPromise();
        return response;
    }

    /**
     * add user
     */
    public async addUser(data: object): Promise<any> {
        const urlSuffix = `/user/`;
        const response = await this.http.post(`${this.urlDGIBack}${urlSuffix}`, data).toPromise();
        return response;
    }
}