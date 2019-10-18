// angular
import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Store, select } from '@ngrx/store';

// leaflet
import { rectangle, LatLngBoundsExpression, Layer } from 'leaflet';

// service
import { SearchService } from './search.service';

// state management
import { ExploreState } from '../../explore.state';
import {
  showLoading,
  closeLoading,
  setLayers,
  setPositionMap,
  setFeatures,
  setFeaturesSeparateByProviders
} from '../../explore.action';

// interface
import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';

// other
// import { formatDateUSA, getLastDateMonth } from 'src/app/shared/helpers/date';
import { formatDateUSA } from 'src/app/shared/helpers/date';
import { convertArrayAsObjectToArray } from 'src/app/shared/helpers/common';


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

  public formSearch: FormGroup;

  /** get infos of store application and set group of validators */
  constructor(
    private ss: SearchService,
    private snackBar: MatSnackBar,
    private store: Store<ExploreState>,
    private fb: FormBuilder,
    private ref: ChangeDetectorRef) {

    this.store.pipe(select('explore')).subscribe(res => {
      if (res.layers) {
        this.layers = convertArrayAsObjectToArray(res.layers) as Layer[];
      }
      if (res.bbox) {
        const bbox = Object.values(res.bbox);
        this.searchObj['bbox'] = {
          north: bbox[1]['lat'],
          south: bbox[0]['lat'],
          west: bbox[0]['lng'],
          east: bbox[1]['lng']
        };

        // update the component template (HTML) manually
        this.ref.detectChanges();
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
    this.getProviders();
    this.resetSearch();
  }

  /** getting available provider */
  private async getProviders() {
    try {
      this.store.dispatch(showLoading());

      const response = await this.ss.getProviders();
      this.providers = Object.keys(response.providers);
    } catch(err) {
      console.log('getProviders() error: ', err);
    } finally {
      this.store.dispatch(closeLoading());
    }
  }

  /** getting available collections */
  public async getCollections() {
    let providers = this.searchObj['providers'];

    // when there is not one provider, it is not necessary to request collections to the server
    if (providers.length === 0) {
      return;
    }

    try {
      this.store.dispatch(showLoading());

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
    } finally {
      this.store.dispatch(closeLoading());
    }
  }

  /** separating features by providers and collections */
  private getFeaturesSeparateByProvidersAndCollections (features: Feature[]) {
    // separate features by providers and collections
    let features_separate_by_providers = {};

    // 'f' is one 'feature'
    features.forEach( f => {
      // get the collection related to the feature
      let collection = (f['properties']['collection'] || f['collection']).toLocaleLowerCase();

      // 'filter' creates a new list with the elements of 'collections' that satisfies the condition
      let providers_by_collection = this.collections.filter(
        // 'pc' is a provider with collection (e.g 'development_seed_stac: landsat-8-l1')
        pc => {
          // if the second part of the string (e.g. 'landsat-8-l1') is equal to the 'collection',
          // then return the 'pc' variable inside a new list
          return pc.toLocaleLowerCase().split(':')[1].trim() === collection
        }
      );
      // get the only 'provider:collection' in the array and get just the provider
      let provider = providers_by_collection[0].split(':')[0];

      // if a 'provider' already exists, then return the existing content, else create an empty provider object
      features_separate_by_providers[provider] = features_separate_by_providers[provider] || {};
      // if a 'collection' already exists, then return the existing content, else create an empty collection list
      features_separate_by_providers[provider][collection] = features_separate_by_providers[provider][collection] || [];
      // add the feature to the array
      features_separate_by_providers[provider][collection].push(f);
    })

    return features_separate_by_providers;
  }

  /** searching feature/items on STAC-COMPOSE */
  public async search() {
    try {
      this.store.dispatch(setFeatures([]));
      this.store.dispatch(showLoading());

      // get the start and end date, and format them
      const startDate = formatDateUSA(new Date(this.searchObj['start_date']));
      const endDate = formatDateUSA(new Date(this.searchObj['last_date']));

      const bbox = Object.values(this.searchObj['bbox']);
      let query = `collections=${this.searchObj['collections'].join(',').replace(/ /g, '')}`;
      query += `&bbox=${bbox[2]},${bbox[1]},${bbox[3]},${bbox[0]}`;
      query += `&time=${startDate}T00:00:00`;
      query += `/${endDate}T23:59:00`;
      query += `&limit=${this.searchObj['limit']}`;

      if (parseInt(this.searchObj['cloud']) > 0) {
        query += `&cloud=${this.searchObj['cloud']}`;
      }

      // look for features on STAC service
      const response = await this.ss.searchSTAC(query);

      if (response.meta.found > 0) {
        // separate features by providers and collections
        let f_by_p = this.getFeaturesSeparateByProvidersAndCollections(response.features);

        // save 'features' and 'features_separate_by_providers' in the memory
        this.store.dispatch(setFeatures(response.features));
        this.store.dispatch(setFeaturesSeparateByProviders(f_by_p));

        // chance the tab on sidebar in order to show the 'tiles' tab
        this.changeStepNav(1);
      } else {
        // chance the tab on sidebar in order to show the 'search' tab
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

  /** cleaning fields on the search form */
  private resetSearch() {
    this.searchObj = {
      providers: '',
      collections: '',
      bbox: {
        // test values
        // north: 14.349547837185362,
        // south: 57.61230468750001,
        // west: 54.88769531250001,
        // east: 15.919073517982413
        north: null,
        south: null,
        west: null,
        east: null
      },
      cloud: null,
      start_date: '2019-09-01T00:00:00',
      last_date: '2019-09-10T00:00:00',
      // limit: 10000
      limit: 10
    };
  }

  /** changing displayed menu */
  private changeStepNav(step: number) {
    this.stepToEmit.emit(step);
  }

  /** viewing bounding box on the map */
  public previewBbox() {
    this.removeLayerBbox();

    const bounds: LatLngBoundsExpression = [
      [ this.searchObj['bbox'].north, this.searchObj['bbox'].east ],
      [ this.searchObj['bbox'].south, this.searchObj['bbox'].west ]
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

  /** removing bounding box of the map */
  public removeLayerBbox() {
    this.layers = this.layers.filter( layer => layer['options'].className !== 'previewBbox');
    this.store.dispatch(setLayers(this.layers));
  }

  /** if it exists all selected coordinates, then it returns true, else it returns false */
  public bboxNotEmpty(): boolean {
    return this.searchObj['bbox'].north && this.searchObj['bbox'].south && this.searchObj['bbox'].east && this.searchObj['bbox'].west;
  }
}
