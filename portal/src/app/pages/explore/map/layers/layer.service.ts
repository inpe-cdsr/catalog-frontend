import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BdcLayer, Grid } from './layer.interface';
import { BaseLayers } from './base-layers.in-memory';
import { Grids } from './grids.in-memory';
import { Environment } from 'src/environments/environment';

/**
 * Layer Service
 * returns layers to visualization in the map
 */
@Injectable({ providedIn: 'root' })
export class LayerService {
  private environment: Environment;

  /** start http service client */
  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  /**
   * get base layers of the map
   * @returns list of BDC layer
   */
  public getBaseLayers(): BdcLayer[] {
    return BaseLayers;
  }

  /**
   * get grids of the BDC project
   * @returns list of WFS BDC layers
   */
  public getGridsLayers(): Grid[] {
    return Grids;
  }

  /**
     * get info feature WMS
     */
    public async getInfoByWMS(layer, bbox, x, y, height, width): Promise<any> {
      const basePath = '/vector_data/wms?REQUEST=GetFeatureInfo&SERVICE=WMS&SRS=EPSG:4326&VERSION=1.1.1';
      let urlSuffix = `${basePath}&BBOX=${bbox}&HEIGHT=${height}&WIDTH=${width}`;
      urlSuffix += `&LAYERS=vector_data:${layer}&QUERY_LAYERS=vector_data:${layer}&INFO_FORMAT=application/json&X=${x}&Y=${y}`;

      const response = await this.http.get(`${this.environment.urlGeoServer}${urlSuffix}`).toPromise();
      return response;
  }

}
