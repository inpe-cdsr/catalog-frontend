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
import { setFeatureToDownload, removeGroupLayer, setLayers } from '../../explore.action';
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
          this.providers.forEach( (provider, index) => {
            this.providersVisible[provider] = true;
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

  public changeVisibilityProviderCollapse(provider) {
    this.providersVisible[provider] = !this.providersVisible[provider];
  }

  public getKeysFromObject(object: Object): Array<string> {
    // get the keys of an 'object' and sort the array
    return Object.keys(object).sort();
  }

  public isToShowErrorMessageFromCollection(context: Object): boolean {
    return ('meta' in context && 'error' in context['meta']);
  }

  public showErrorMessageFromCollection(context: Object): String {
    if (this.isToShowErrorMessageFromCollection(context)) {
      return context['meta']['error'];
    }

    return "No error message is available";
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
    // turn the features on
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


    // turn the features off
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

  /** get context extension from FeatureCollection based on STAC 9  */
  public getContextFromCollection(provider: string, collection: string): object{
    // get the FeatureCollection based on 'provider' and 'collection'
    let selected_fcollection = this.features_separate_by_providers$[provider][collection];

    // inpe-stac standard. This STAC is already following STAC 9 extension
    if (selected_fcollection.context) {
      return selected_fcollection.context;

    // development seed standard. This STAC is not following STAC 9 extension,
    // then I build it following the standard
    } else if (selected_fcollection.meta) {
      // I'm destructuring the 'meta' object, then I get 'found' key into 'found' variable and
      // the rest ones I put inside 'context' object
      // 'context' object does not have 'found' key because I've removed it during destructuring
      const { found, ...context } = selected_fcollection.meta;
      // rename 'found' key by 'matched' key
      context.matched = found;

      return context;

    // any other STAC service that does not have 'context' or 'meta' key
    } else {
      // add 'returned' key by length of features returned
      // how I don't know 'matched' value, then I return a string
      return {
        'returned': selected_fcollection.features.length,
        'matched': '?',
        'page': -1,
        'limit': -1
      }
    }
  }
}
