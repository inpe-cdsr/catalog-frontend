import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BdcLayerWFS, BdcLayer } from './layer.interface';
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
  public getGridsLayers(): BdcLayerWFS[] {
    return Grids;
  }

  /**
   * gets GeoJson object from a layer in the BDC project GeoServer
   * @returns layer GeoJson
   */
  public getGeoJsonByLayer(ds: string, title: string): Promise<any> {
    const urlSuffix = `?service=WFS&version=1.0.0&request=GetFeature&typeName=${ds}:${title}&&outputFormat=application%2Fjson`;

    let geoServer = this.environment.getGeoServerById('brazil-data-cube');

    return this.http.get(`${geoServer['url']}/${ds}/ows${urlSuffix}`).toPromise();
  }
}
