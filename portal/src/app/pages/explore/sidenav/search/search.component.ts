import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { rectangle, LatLngBoundsExpression, Layer } from 'leaflet';

import { SearchService } from './search.service';
import { ExploreState } from '../../explore.state';
import { formatDateUSA, getLastDateMonth } from 'src/app/shared/helpers/date';
import {
  showLoading, closeLoading, setLayers, setPositionMap, setFeatures
} from '../../explore.action';

// this is just an example in order to test, it can be removed
import { example_of_features } from './example';

/**
 * component to search data of the BDC project
 * search => STAC and WMS
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  /** emit event to sidenav */
  @Output() stepToEmit = new EventEmitter();

  /** available cubes */
  public collections: string[];
  /** cubes type */
  public typesCollection: string[];
  /** infos with parameters to search Cube */
  public searchObj: object;
  /** layers enabled in the map */
  private layers: Layer[];
  /** available providers */
  public providers: string[];

  public providers_with_its_collections: object;

  public features_separate_by_providers: object;

  public formSearch: FormGroup;

  /** get infos of store application and set group of validators */
  constructor(
    private ss: SearchService,
    private snackBar: MatSnackBar,
    private store: Store<ExploreState>,
    private fb: FormBuilder) {

    this.store.pipe(select('explore')).subscribe(res => {
      if (res.layers) {
        this.layers = Object.values(res.layers).slice(0, (Object.values(res.layers).length - 1)) as Layer[];
      }
      if (res.bbox) {
        const bbox = Object.values(res.bbox);
        this.searchObj['bbox'] = {
          north: bbox[1]['lat'],
          south: bbox[0]['lat'],
          west: bbox[0]['lng'],
          east: bbox[1]['lng']
        };
      }
    });

    this.formSearch = this.fb.group({
      providers: ['', [Validators.required]],
      collections: ['', [Validators.required]],
      north: ['', [Validators.required]],
      west: ['', [Validators.required]],
      east: ['', [Validators.required]],
      south: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      last_date: ['', [Validators.required]],
      cloud: ['']
    })
  }

  /** set basic values used to mount component */
  ngOnInit() {
    this.collections = [];
    this.providers_with_its_collections = {};
    this.features_separate_by_providers = {};
    this.getProviders();
    this.resetSearch();
  }

  /** get available cubes */
  private async getProviders() {
    try {
      const response = await this.ss.getProviders();
      this.providers = Object.keys(response.providers);
    } catch(err) {
      console.log('getProviders() error: ', err);
    }
  }

  public async getCollections() {
    let providers = this.searchObj['providers'];

    // when there is not one provider, it is not necessary to request providers to the server
    if (providers.length === 0) {
      return;
    }

    try {
      this.providers_with_its_collections = await this.ss.getCollections(providers);
      this.collections = [];

      Object.keys(this.providers_with_its_collections).forEach( provider => {
        this.collections = [
          ...this.collections,
          ...this.providers_with_its_collections[provider].map(
            collection => `${provider.toLocaleLowerCase()}: ${collection}`
          )
        ]
      })
    } catch(err) {
      console.log('getCollections() error: ', err);
    }
  }

  private getFeaturesSeparateByProvidersAndCollections (features) {
    console.log('\n getFeaturesSeparateByCollectionsAndProviders()');

    // separate features by collections

    let features_by_collections = {};
    let collection = '';

    for (let i=0; i<features.length; i++) {
      let feature = features[i];

      // if 'collection' attribute is inside 'properties', then get it from there
      if ('collection' in feature.properties) {
        collection = feature.properties.collection.toLocaleLowerCase();
      } else {
        // else get it from 'feature'
        collection = feature.collection.toLocaleLowerCase();
      }

      // if there is this 'collection' inside 'features_by_collections' object, then add the feature to the list
      if (collection in features_by_collections) {
        features_by_collections[collection].push(feature);
      } else {
        // else create an empty list and add the feature to the new list
        features_by_collections[collection] = []
        features_by_collections[collection].push(feature);
      }
    }

    // separate collections by providers

    let features_separate_by_providers = {};

    for (let provider_original in this.providers_with_its_collections) {
      let collections = this.providers_with_its_collections[provider_original];
      let provider = provider_original.toLocaleLowerCase();

      // create a complex object to separate features by collections and providers
      features_separate_by_providers[provider] = {};

      for (let i=0; i<collections.length; i++) {
        let collection = collections[i].toLocaleLowerCase();

        // create a complex object to separate features by collections and providers
        features_separate_by_providers[provider][collection] = {};
        features_separate_by_providers[provider][collection]['features'] = features_by_collections[collection];
      }
    }

    return features_separate_by_providers;
  }

  /** search feature/items in STAC-COMPOSE */
  public async search() {
    try {
      this.store.dispatch(showLoading());

      // set first day of the month on start date and last day of the month on last date
      // const startDate = formatDateUSA(new Date(this.searchObj['start_date'].setDate(1)));
      // const lastDate = formatDateUSA(new Date(this.searchObj['last_date'].setDate(getLastDateMonth(new Date(this.searchObj['last_date'])))));

      // get the start and end date, and format them
      const startDate = formatDateUSA(new Date(this.searchObj['start_date']));
      const lastDate = formatDateUSA(new Date(this.searchObj['last_date']));

      const bbox = Object.values(this.searchObj['bbox']);
      let query = `collections=${this.searchObj['collections'].join(',').replace(/ /g, '')}`;
      query += `&bbox=${bbox[2]},${bbox[1]},${bbox[3]},${bbox[0]}`;
      query += `&time=${startDate}T00:00:00`;
      query += `/${lastDate}T23:59:00`;
      query += `&limit=10`;
      // query += `&limit=10000`;

      if (parseInt(this.searchObj['cloud']) > 0) {
        query += `&cloud=${this.searchObj['cloud']}`;
      }

      // look for features on STAC service
      const response = await this.ss.searchSTAC(query);

      // separate features by providers and collections
      this.features_separate_by_providers = this.getFeaturesSeparateByProvidersAndCollections(response.features);

      if (response.meta.found > 0) {
        this.store.dispatch(setFeatures(response.features));
        this.changeStepNav(1);

      } else {
        this.store.dispatch(setFeatures([]));
        this.changeStepNav(0);
        this.snackBar.open('RESULTS NOT FOUND!', '', {
          duration: 5000,
          verticalPosition: 'top',
          panelClass: 'app_snack-bar-error'
        });
      }

    } catch (err) {
      this.changeStepNav(0);
      this.snackBar.open('INCORRECT SEARCH!', '', {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: 'app_snack-bar-error'
      });

    } finally {
      const newLayers = this.layers.filter( lyr => !lyr['options'].alt || (lyr['options'].alt && lyr['options'].alt.indexOf('qls_') < 0));
      this.store.dispatch(setLayers(newLayers));
      this.store.dispatch(closeLoading());
    }
  }

  /** clean fields in the search form */
  private resetSearch() {
    this.searchObj = {
      providers: '',
      collections: '',
      bbox: {
        north: null,
        south: null,
        west: null,
        east: null
      },
      cloud: null,
      start_date: '',
      last_date: ''
      // start_date: '2019-08-01',
      // last_date: '2019-09-01'
    };
  }

  /**
   * change menu displayed
   */
  private changeStepNav(step: number) {
    this.stepToEmit.emit(step);
  }

  /** view bounding box in map */
  public previewBbox() {
    this.removeLayerBbox();
    const bounds: LatLngBoundsExpression = [
      [this.searchObj['bbox'].north, this.searchObj['bbox'].east],
      [this.searchObj['bbox'].south, this.searchObj['bbox'].west]
    ];
    const newLayers = rectangle(bounds, {
      color: '#666',
      weight: 1,
      className: 'previewBbox'
    }).bringToFront();

    this.layers.push(newLayers);
    this.store.dispatch(setLayers(this.layers));
    this.store.dispatch(setPositionMap(newLayers.getBounds()));
  }

  /** remove bounding box of the map */
  public removeLayerBbox() {
    this.layers = this.layers.filter( lyr => lyr['options'].className !== 'previewBbox');
    this.store.dispatch(setLayers(this.layers));
  }

  /** return if exists all selected coordinates */
  public bboxNotEmpty(): boolean {
    return this.searchObj['bbox'].north && this.searchObj['bbox'].south && this.searchObj['bbox'].east && this.searchObj['bbox'].west;
  }
}
