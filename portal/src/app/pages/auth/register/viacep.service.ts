import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from 'src/environments/environment';

/**
 * Service to connect with Via CEP
 */
@Injectable({ providedIn: 'root' })
export class ViaCEPServie {

    private environment: Environment;

    /** start http service client */
    constructor(private http: HttpClient) {
        this.environment = new Environment();
    }

    /**
     * get Address by CEP
     */
    public async getAddress(cep: object): Promise<any> {
        const urlSuffix = `/${cep}/json/`;
        const response = await this.http.get(`${this.environment.urlViaCEP}${urlSuffix}`).toPromise();
        return response;
    }
}