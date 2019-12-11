import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BdcLayer, Grid } from './layer.interface';
import { BaseLayers } from './base-layers.in-memory';

/**
 * Layer Service
 * returns layers to visualization in the map
 */
@Injectable({ providedIn: 'root' })
export class LayerService {
  private urlGeoServer = window['__env'].urlGeoServer;
  private grids = window['__env'].grids;

  /** start http service client */
  constructor(private http: HttpClient) {
  }

  /**
   * get base layers of the map
   * @returns list of BDC layer
   */
  public getBaseLayers(): BdcLayer[] {
    return BaseLayers;
  }

  /**
   * get grids
   */
  public getGridsLayers(): Grid[] {
    let gridsList: Grid[] = [];
    this.grids.split(';').forEach(grid => {
      const elements = grid.split(':')
      gridsList.push({
        id: elements[1].trim(),
        enabled: false,
        name: elements[0].trim(),
        layer: null,
        style: elements[2].trim()
      });
    })
    return gridsList;
  }

  /**
     * get info feature WMS
     */
    public async getInfoByWMS(layer, bbox, x, y, height, width): Promise<any> {
      const basePath = '/vector_data/wms?REQUEST=GetFeatureInfo&SERVICE=WMS&SRS=EPSG:4326&VERSION=1.1.1';
      let urlSuffix = `${basePath}&BBOX=${bbox}&HEIGHT=${height}&WIDTH=${width}`;
      urlSuffix += `&LAYERS=vector_data:${layer}&QUERY_LAYERS=vector_data:${layer}&INFO_FORMAT=application/json&X=${x}&Y=${y}`;

      const response = await this.http.get(`${this.urlGeoServer}${urlSuffix}`).toPromise();
      return response;
  }

}
