import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class SearchService {
  private urlStacCompose = window['__env'].urlStacCompose;

  /** start http service client */
  constructor(private http: HttpClient) {
  }

  /**
   * get STAC providers
   */
  public async getProviders(): Promise<any> {
    const urlSuffix = '/providers';
    return await this.http.get(`${this.urlStacCompose}${urlSuffix}`).toPromise();
  }

  /**
   * get STAC Collections by provider
   */
  public async getCollections(providers: string[]): Promise<any> {
    const urlSuffix = `/collections?providers=${providers.length > 1 ? providers.join(',') : providers[0]}`;
    return await this.http.get(`${this.urlStacCompose}${urlSuffix}`).toPromise();
  }

  /**
   * get features by the /collections/items endpoint
   */
  // public async searchSTAC(query: string): Promise<any> {
  //   const urlSuffix = `/collections/items?${query}`;
  //   const response = await this.http.get(`${this.urlStacCompose}${urlSuffix}`).toPromise();
  //   return response;
  // }

  /**
   * get features by the `GET /stac/search` endpoint
   */
  public async getStacSearch(query: string): Promise<any> {
    const urlSuffix = `/stac/search?${query}`;
    return await this.http.get(`${this.urlStacCompose}${urlSuffix}`).toPromise();
  }

  /**
   * get features by the `POST /stac/search` endpoint
   */
  public async postStacSearch(data: Object): Promise<any> {
    const url = `/stac/search/`;
    const headers = {'Content-Type': 'application/json'};
    return this.http.post<any>(`${this.urlStacCompose}${url}`, data, { headers }).toPromise();
  }
}
