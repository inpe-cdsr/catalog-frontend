import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SearchService {

    /** start http service client */
    constructor(private http: HttpClient) { }

    /**
     * get STAC providers
     */
    public async getProviders(): Promise<any> {
        const urlSuffix = '/providers';
        const response = await this.http.get(`${environment.urlStacCompose}${urlSuffix}`).toPromise();
        return response;
    }

    /**
     * get STAC Collections by provider
     */
    public async getCollections(providers: string[]): Promise<any> {
        const urlSuffix = `/collections?providers=${providers.join(',')}`;
        const response = await this.http.get(`${environment.urlStacCompose}${urlSuffix}`).toPromise();
        return response;
    }

    /**
     * get Features in STAC Search
     */
    public async searchSTAC(query: string): Promise<any> {
        const urlSuffix = `/collections/items?${query}`;
        const response = await this.http.get(`${environment.urlStacCompose}${urlSuffix}`).toPromise();
        return response;
    }
}
