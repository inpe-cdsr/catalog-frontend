import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from 'src/environments/environment';

/**
 * Service to authentication
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

    /** base url of DGIBack */
    private environment: Environment;

    /** start http service client */
    constructor(private http: HttpClient) {
        this.environment = new Environment();
    }

    /**
     * login in DPI DGIBack
     */
    public async login(credentials: object): Promise<any> {
        const urlSuffix = `/auth/login`;
        const response = await this.http.post(`${this.environment.urlDGIBack}${urlSuffix}`, credentials).toPromise();
        return response;
    }
}