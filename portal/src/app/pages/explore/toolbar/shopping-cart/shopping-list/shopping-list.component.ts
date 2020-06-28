import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';
import { formatDateUSA } from 'src/app/shared/helpers/date';
import { Store, select } from '@ngrx/store';
import { ExploreState } from '../../../explore.state';
import { removeFeatureToDownload, removeAllFeaturesToDownload } from '../../../explore.action';
import { downloadFile, join } from 'src/app/shared/helpers/common';


/**
 * Dialog Features
 * view infos of the cube and downloads assets
 */
@Component({
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  public features: Feature[];
  public collections: string[] = [];
  public logged = false;
  public page = {};
  private features_by_providers = [];
  private providersToken = [];

  private credentials = {
    username: '',
    password: ''
  }

  /** receive infos to display in this component */
  constructor(
    private store: Store<ExploreState>,
    public dialogRef: MatDialogRef<ShoppingListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      Object.keys(data.providers).forEach(p => {
        if (data.providers[p]['require_credentials'] === 1) {
          this.providersToken.push(p);
        }
      })

      this.features = data.features;
      this.getCollections();
      this.store.pipe(select('auth')).subscribe(res => {
        this.logged = res.userId && res.token && res.fullname && res.email && res.password;
        this.credentials.username = res.email;
        this.credentials.password = res.password;
      });

      this.store.pipe(select('explore')).subscribe(res => {
        if (res.features_separate_by_providers) {
          const f_by_p = res.features_separate_by_providers
          this.features_by_providers = [];
          Object.keys(res.features_separate_by_providers).forEach(p => {
            this.providersToken.forEach(provider => {
              if (p.toLowerCase() === provider.toLowerCase()) {
                Object.keys(f_by_p[p]).forEach(c => {
                  const features = f_by_p[p][c]['features'];
                  this.features_by_providers = this.features_by_providers.concat(features);
                });
              }
            });
          });
        }
      });
  }

  clearList() {
    this.features = [];
    this.store.dispatch(removeAllFeaturesToDownload());
  }

  getCollections() {
    this.features.forEach(f => {
      const collection = this.getCollectionFromFeature(f);
      if (this.collections.indexOf(collection) < 0) {
        this.collections.push(collection);
        this.page[collection] = {
          page: 1,
          perPage: 18
        }
      }
    })
  }

  formatID(id: string): string {
    return `${id.substring(0, 13)} ${id.length > 13 ? '...' : ''}`;
  }

  getFormattedDate(date: string) {
    return formatDateUSA(new Date(date));
  }

  getCollectionFromFeature(feature: Feature): string {
    return 'collection' in feature ? feature['collection'] : feature['properties']['collection'];
  }

  getCloudCover(feature: Feature) {
    return 'eo:cloud_cover' in feature['properties'] ? feature['properties']['eo:cloud_cover'] : feature['properties']['cloud_cover'];
  }

  filterFeatures(features, collection) {
    return features.filter(f => this.getCollectionFromFeature(f) === collection);
  }

  removeFeatureOfDownload(feature: Feature) {
    this.features = this.features.filter( f => f.id !== feature.id );
    this.store.dispatch(removeFeatureToDownload(feature));
  }

  downloadLinks() {
    let data = '';
    this.features.forEach(feat => {
      if (feat.properties['eo:bands']) {
        feat.properties['eo:bands'].forEach(band => {
          const url = this.generateURL(feat['id'], feat.assets[band['name']]['href']);
          data += `${url} \n`;
        });
      } else {
        Object.keys(feat.assets).forEach(asset => {
          if (asset.toLowerCase() !== 'thumbnail' && asset.toLowerCase() !== 'metadata') {
            const url = this.generateURL(feat['id'], feat.assets[asset]['href']);
            data += `${url} \n`;
          }
        });
      }
    });

    let now = new Date();
    let formattedNow = now.getFullYear() + '_' + (now.getMonth() + 1) + '_' + now.getDate() + '_' + now.getHours() + '_' + now.getMinutes() + '_' + now.getSeconds();

    downloadFile(`inpe_catalog_${formattedNow}.txt`, data);
  }

  async downloadFeature(feature) {
    if ('eo:bands' in feature.properties) {
      feature.properties['eo:bands'].forEach(band => {
        const url = feature.assets[band['name']]['href'];
        this.dispatchDownload(this.generateURL(feature['id'], url));
      });
    } else {
      Object.keys(feature.assets).forEach(asset => {
        if (asset.toLowerCase() !== 'thumbnail' && asset.toLowerCase() !== 'metadata') {
          const url = feature.assets[asset]['href'];
          this.dispatchDownload(this.generateURL(feature['id'], url));
        }
      });
    }
  }

  private dispatchDownload(url) {
    const urlParts = url.split('/')
    let fileName = urlParts[urlParts.length-1];

    const element = document.createElement("a");
    element.href = url;
    element.target = "_blank";
    element.setAttribute("download", fileName.split('?')[0]);
    element.click();
  }

  private generateURL(sceneId: string, url: string): string {
    const features = this.features_by_providers.filter(f => f['id'] === sceneId);

    // if there is a selected feature, then return the url with its parameters
    if (features.length > 0) {

      // let response = await this.sls.getClientIP();

      // var origin = window.location.origin // this will give you the ip:port
      // var hostname = window.location.hostname // this will give you the ip:port
      // var location = window.location // this will give you the ip:port

      // console.log('\n\n generateURL - origin: ', origin);
      // console.log(' generateURL - origin: ', hostname);
      // console.log(' generateURL - location: ', location);

      // 'sceneId' is unique, then there is just one feature inside the features list
      let keys = {
        'key': `${this.credentials.username}:${this.credentials.password}`,
        'collection': features[0]['collection'],
        'scene_id': sceneId
      };

      // create the parameters dynamically using the object above
      let parameters = join(keys, '=', '&');
      let urlWithParameters = `${url}?${parameters}`;

      return urlWithParameters;
    }

    // if there is not a selected feature, then return the url
    return url;
  }

  private getKeys(object) {
    let keys = Object.keys(object);
    let keysToRemove = ['thumbnail', 'metadata'];

    // if there are unnecessary keys, then remove them
    keysToRemove.forEach(keyToRemove => {
      let index = keys.indexOf(keyToRemove);
      if (index !== -1)
        keys.splice(index, 1);
    });

    return keys;
  }

}
