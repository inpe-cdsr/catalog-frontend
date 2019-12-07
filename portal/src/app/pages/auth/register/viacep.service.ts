import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * Service to connect with Via CEP
 */
@Injectable({ providedIn: 'root' })
export class ViaCEPServie {

    private urlViaCEP = window['__env'].urlViaCEP;

    /** start http service client */
    constructor(private http: HttpClient) {
    }

    /**
     * get Address by CEP
     */
    public async getAddress(cep: object): Promise<any> {
        const urlSuffix = `/${cep}/json/`;
        const response = await this.http.get(`${this.urlViaCEP}${urlSuffix}`).toPromise();
        return response;
    }
}