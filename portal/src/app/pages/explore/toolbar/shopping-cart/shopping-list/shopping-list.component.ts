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
    email: '',
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
        this.logged = res.username && res.token && res.name && res.email && res.password;
        this.credentials.email = res.email;
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

  generateURL(feature: Feature, url: string): string {
    const collection = this.getCollectionFromFeature(feature)

    const keys = {
      'email': `${this.credentials.email}`,
      'collection': collection,
      'item_id': feature.id
    };

    // create the parameters dynamically using the object above
    const parameters = join(keys, '=', '&');
    const urlWithParameters = `${url}?${parameters}`;

    return urlWithParameters;
  }

  downloadLinks() {
    let data = '';
    this.features.forEach(feature => {
      if (feature.properties['eo:bands']) {
        feature.properties['eo:bands'].forEach(band => {
          const url = this.generateURL(feature, feature.assets[band['name']]['href']);
          data += `${url} \n`;
        });
      } else {
        Object.keys(feature.assets).forEach(asset => {
          if (asset.toLowerCase() !== 'thumbnail' && asset.toLowerCase() !== 'metadata') {
            const url = this.generateURL(feature, feature.assets[asset]['href']);
            data += `${url} \n`;
          }
        });
      }
    });

    let now = new Date();
    let formattedNow = now.getFullYear() + '_' + (now.getMonth() + 1) + '_' + now.getDate() + '_' + now.getHours() + '_' + now.getMinutes() + '_' + now.getSeconds();

    downloadFile(`inpe_catalog_${formattedNow}.txt`, data);
  }

  getKeys(object) {
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
