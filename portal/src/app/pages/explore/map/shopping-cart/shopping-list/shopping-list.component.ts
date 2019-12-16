import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';
import { formatDateUSA } from 'src/app/shared/helpers/date';
import { Store, select } from '@ngrx/store';
import { ExploreState } from '../../../explore.state';
import { removeFeatureToDownload, removeAllFeaturesToDownload } from '../../../explore.action';
import { downloadFile } from 'src/app/shared/helpers/common';

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

  removeFeatureOfDownload(feature: Feature) {
    this.features = this.features.filter( f => f.id !== feature.id );
    this.store.dispatch(removeFeatureToDownload(feature));
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

  filterFeatures(features, collection) {
    return features.filter(f => this.getCollectionFromFeature(f) === collection);
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

  formatID(id: string) {
    return `${id.substring(0, 13)} ${id.length > 13 ? '...' : ''}`;
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
        })
      }
    });

    downloadFile('catalog_DGI_data.txt', data)
  }

  async downloadFeature(feat) {
    if ('eo:bands' in feat.properties) {
      feat.properties['eo:bands'].forEach(band => {
        const url = feat.assets[band['name']]['href'];
        this.dispatchDownload(this.generateURL(feat['id'], url));
      });
    } else {
      Object.keys(feat.assets).forEach(asset => {
        if (asset.toLowerCase() !== 'thumbnail' && asset.toLowerCase() !== 'metadata') {
          const url = feat.assets[asset]['href'];
          this.dispatchDownload(this.generateURL(feat['id'], url));
        }
      });
    }
  }

  private dispatchDownload(url) {
    const element = document.createElement("a");
    element.href = url;
    element.target = "_blank";
    element.setAttribute("download", url);
    element.click();
  }

  private generateURL(sceneId, url): string {
    const feats = this.features_by_providers.filter(f => f['id'] === sceneId); 
    return feats.length > 0 ? `${url}?key=${this.credentials.username}:${this.credentials.password}` : url;
  }

}
