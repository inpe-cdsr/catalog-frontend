import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/**
 * Service to authentication
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

    /** base url to catalog backend */
    private urlDGIBack = window['__env'].urlDGIBack;

    /** start http service client */
    constructor(private http: HttpClient) {}

    /**
     * login
     */
    public async login(credentials: object): Promise<any> {
        const urlSuffix = `/auth/login`;
        return await this.http.post(`${this.urlDGIBack}${urlSuffix}`, credentials).toPromise();
    }

    /**
     * forgot password
     */
    public async forgotPassword(email: string): Promise<any> {
      const urlSuffix = `/auth/forgot-password`;
      const params = new HttpParams({
        fromObject: { email: email }
      });
      return await this.http.get(`${this.urlDGIBack}${urlSuffix}`, {params: params}).toPromise();
  }

    /**
     * add user
     */
    public async addUser(data: object): Promise<any> {
        const urlSuffix = `/user/`;
        return await this.http.post(`${this.urlDGIBack}${urlSuffix}`, data).toPromise();
    }
}
