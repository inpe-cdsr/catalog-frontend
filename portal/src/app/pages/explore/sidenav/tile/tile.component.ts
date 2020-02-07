// angular
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

// lodash
import * as cloneDeep from 'lodash/cloneDeep';

// state management
import { ExploreState } from 'src/app/pages/explore/explore.state';
import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';

// component
import { DialogCollectionDownloadComponent } from 'src/app/shared/components/dialog-collection-download/dialog-collection-download.component';
import { setFeatureToDownload, removeGroupLayer, setLayers, setFeaturesSeparateByProviders } from '../../explore.action';
import { formatDateUSA } from 'src/app/shared/helpers/date';
import { imageOverlay, geoJSON } from 'leaflet';

// other
// import { FEATURES_BY_PROVIDERS_SAMPLE } from 'src/app/shared/example/feature';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent{

  public features_separate_by_providers$: Object;
  public providers: string[];
  public providersVisible = {};
  public providersInfos = {};

  /** get infos by store application */
  constructor(private store: Store<ExploreState>, public dialog: MatDialog) {
    this.store.pipe(select('explore')).subscribe(res => {
      const lastFeatures = this.features_separate_by_providers$;
      if (res.features_separate_by_providers) {
        // original
        this.providers = Object.keys(res.features_separate_by_providers).filter( feature => feature !== 'type' );

        this.features_separate_by_providers$ = res.features_separate_by_providers;
        if (!lastFeatures || lastFeatures != this.features_separate_by_providers$) {
          this.providers.forEach( (p, i) => {
            this.providersVisible[p] = true;
          });
        }

        if(res.providersInfos) {
          this.providersInfos = res.providersInfos;
        }

        // test/example (these lines can be removed) (sidenav.component must be updated as well)
        // this.providers = Object.keys(FEATURES_BY_PROVIDERS_SAMPLE).filter( feature => feature !== 'type' );
        // this.features_separate_by_providers$ = FEATURES_BY_PROVIDERS_SAMPLE;
      }
    });
  }

  public changeVisibleFeatByProvider(provider) {
    this.providersVisible[provider] = !this.providersVisible[provider];
  }

  public getKeysFromObject(object: Object): Array<string> {
    // get the keys of an 'object' and sort the array
    return Object.keys(object).sort();
  }

  public openCollectionDownloadDialog(collection_name: string, features: Feature[]): void {
    // create a list with just the necessary attributes of the features
    let features_to_send = [];

    features.forEach((feature: Feature) => {
      let new_feature = {};

      // copying just the necessary attributes in order to avoid overloading of memory
      new_feature['id'] = feature['id'];
      new_feature['assets'] = cloneDeep(feature['assets']);

      features_to_send.push(new_feature);
    })

    this.dialog.open(DialogCollectionDownloadComponent, {
      width: '650px',
      // height: '550px',
      data: {
        collection_name,
        features: features_to_send
      }
    });
  }

  public addCollectionToShopping(provider, collection) {
    this.features_separate_by_providers$[provider][collection].features.forEach(f => {
      this.store.dispatch(setFeatureToDownload(f));
    });
  }

  public onChangeLayersByCollection(event, provider, collection) {
    if (event.checked) {
      let newLayers = [];
      this.features_separate_by_providers$[provider][collection]['enabled'] = true;
      this.features_separate_by_providers$[provider][collection].features.forEach(f => {
        f['enabled'] = true

        const featureGeoJson = geoJSON(f);
        const bounds = featureGeoJson.getBounds();
        const newlayer = imageOverlay(f.assets.thumbnail.href, bounds, {
          'alt': `qls_${f.id}`,
          interactive: true
        }).setZIndex(999).bindPopup( _ => {
          return `
            <p><b>ID</b>: ${ f.id }</p>
            <p><b>Date</b>: ${ formatDateUSA(new Date(f.properties.datetime)) }</p>
            <p><b>Collection</b>: ${ 'collection' in f ? f['collection'] : f['properties']['collection'] }</p>
            <p><b>Cloud Cover</b>: ${ f.properties['eo:cloud_cover'] || '-' }</p>
          `;
        });
        newLayers.push(newlayer);
      });
      this.store.dispatch(setLayers(newLayers));

    } else {
      this.features_separate_by_providers$[provider][collection]['enabled'] = false;
      const featsByProviders = this.features_separate_by_providers$[provider][collection].features.map(f => {
        this.store.dispatch(removeGroupLayer({
          key: 'alt',
          prefix: `qls_${f.id}`
        }));
        return {...f, enabled: false}
      });
      this.features_separate_by_providers$[provider][collection].features = featsByProviders;
    }
  }

  public getContextFromCollection(provider, collection){
    let selected_collection = this.features_separate_by_providers$[provider][collection];

    console.log('\n\n this.features_separate_by_providers$: ', this.features_separate_by_providers$);
    console.log('provider: ', this.features_separate_by_providers$[provider]);
    console.log('selected_collection: ', selected_collection);

    return selected_collection;
  }

}
