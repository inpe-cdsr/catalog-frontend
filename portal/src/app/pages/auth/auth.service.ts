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
   * POST request
   */
  private async post(urlSuffix: string, payload: object) {
    return await this.http.post(`${this.urlDGIBack}${urlSuffix}`, payload).toPromise();
  }

  /**
   * login
   */
  public async login(payload: object): Promise<any> {
    return this.post(`/auth/login`, payload);
  }

  /**
   * add user
   */
  public async addUser(payload: object): Promise<any> {
    return this.post(`/user/`, payload);
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
   * reset password
   */
  public async resetPassword(payload: object): Promise<any> {
    return this.post(`/auth/reset-password`, payload);
  }

}
