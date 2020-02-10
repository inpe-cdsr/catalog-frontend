// angular
import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { MatSnackBar, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { Store, select } from '@ngrx/store';

// leaflet
import { rectangle, LatLngBoundsExpression } from 'leaflet';

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
  setFeaturesSeparateByProviders,
  setBbox,
  removeGroupLayer
} from '../../explore.action';

// interface
import { Feature, Collection } from 'src/app/pages/explore/sidenav/tile/tile.interface';

// other
// import { formatDateUSA, getLastDateMonth } from 'src/app/shared/helpers/date';
import { formatDateUSA } from 'src/app/shared/helpers/date';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/helpers/date.adapter';
import { isObjectEmpty } from 'src/app/shared/helpers/common';


function getCollectionsFollowingSTACComposeStandard(providers_with_collections: object): string[]{
  let collectionsFollowingSTACComposeStandard: string[] = [];

  for (let provider in providers_with_collections) {
    // 'type' is not a provider, then ignore it
    if (provider === 'type') {
      continue;
    }

    let collections: string[] = providers_with_collections[provider];

    for (let collection of collections) {
      collectionsFollowingSTACComposeStandard.push(provider + ':' + collection);
    }
  }

  return collectionsFollowingSTACComposeStandard;
}


function validateForm(form) {
  // Source: https://stackoverflow.com/a/44280487/8447990

  let errorMessage: string[] = [];

  if (form.status !== 'VALID'){

    Object.keys(form.controls).forEach(field => {
      const controlErrors: ValidationErrors = form.get(field).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(fieldError => {
          if (fieldError === 'required') {
            errorMessage.push('\'' + field + '\' field is required');
          }

          if (fieldError === 'max') {
            errorMessage.push('maximum value to \'' + field + '\' field is ' + controlErrors[fieldError][fieldError]);
          }

          if (fieldError === 'min') {
            errorMessage.push('minimum value to \'' + field + '\' field is ' + controlErrors[fieldError][fieldError]);
          }
        });
      }
    });

    throw new Error("There are problems with required fields! Error: " + errorMessage.join(';'));
  }
}


/** initialize each feature collection and its features with false, in other words, they will not be turned on */
function initializeFeaturesSeparateByProviders(featuresSeparateByProviders: object){
  for (let [provider_name, collections] of Object.entries(featuresSeparateByProviders)) {
    for (let [collection_name, collection] of Object.entries(collections)) {
      collection['enabled'] = false;

      collection['features'].forEach((feature: Feature) => {
        feature.enabled = false;
      });
    }
  }

  return featuresSeparateByProviders;
}


/**
 * component to search data of the BDC project
 * search => STAC and WMS
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [{
    provide: DateAdapter, useClass: AppDateAdapter
  },
  {
    provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
  }]
})
export class SearchComponent implements OnInit {

  /** emit event to sidenav */
  @Output() stepToEmit = new EventEmitter();

  /** cubes type */
  public typesCollection: string[];
  /** infos with parameters to search Cube */
  public searchObj: object;

  public formSearch: FormGroup;

  /** get infos of store application and set group of validators */
  constructor(
    private ss: SearchService,
    private snackBar: MatSnackBar,
    private store: Store<ExploreState>,
    private fb: FormBuilder,
    private ref: ChangeDetectorRef) {

    this.store.pipe(select('explore')).subscribe(res => {
      if (res.bbox) {
        const bbox = Object.values(res.bbox);
        this.searchObj['bbox'] = {
          north: bbox[1]['lat'],
          south: bbox[0]['lat'],
          west: bbox[0]['lng'],
          east: bbox[1]['lng']
        };

        // update the component template (HTML) manually, because for some reason,
        // the template is not updated automatically when I add the coordinates to the form
        this.ref.detectChanges();
      }
      if (!isObjectEmpty(res.datasetSelectedCollections)) {
        // remove unnecessary key
        if ('type' in res.datasetSelectedCollections) {
          delete res.datasetSelectedCollections['type'];
        }

        this.searchObj['selectedCollections'] = res.datasetSelectedCollections;
      }
    });

    this.formSearch = this.fb.group({
      north: ['', [Validators.required]],
      west: ['', [Validators.required]],
      east: ['', [Validators.required]],
      south: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      last_date: ['', [Validators.required]],
      cloud: [''],
      limit: ['', [Validators.required, Validators.min(0),  Validators.max(1000)]]
    })
  }

  /** set basic values used to mount component */
  ngOnInit() {
    this.resetSearch();
  }

  /** searching feature/items on STAC-COMPOSE */
  public async search() {
    // console.log('\nSearchComponent.search()');

    try {
      validateForm(this.formSearch);

      // if the object is empty, then raise an exception
      if (isObjectEmpty(this.searchObj['selectedCollections'])) {
        throw new Error("You must choose at least one collection in the previous tab!");
      }

      this.store.dispatch(setFeatures([]));
      this.store.dispatch(showLoading());

      // get the start and end date, and format them
      const startDate = formatDateUSA(new Date(this.searchObj['start_date']));
      const endDate = formatDateUSA(new Date(this.searchObj['last_date']));

      const bbox = Object.values(this.searchObj['bbox']);
      const collectionsFollowingSTACComposeStandard = getCollectionsFollowingSTACComposeStandard(this.searchObj['selectedCollections']);

      let query = `collections=${collectionsFollowingSTACComposeStandard.join(',')}`;
      query += `&bbox=${bbox[2]},${bbox[1]},${bbox[3]},${bbox[0]}`;
      query += `&time=${startDate}T00:00:00/${endDate}T23:59:00`;
      query += `&limit=${this.searchObj['limit']}`;

      if (parseInt(this.searchObj['cloud']) > 0) {
        query += `&cloud_cover=${this.searchObj['cloud']}`;
      }

      // look for features on STAC service
      let response = await this.ss.searchSTAC(query);
      // const features = response.features.filter(f => f['type'].toLowerCase() === 'feature')

      // if 'response' is not empty...
      if (!(Object.keys(response).length === 0 && response.constructor === Object)) {
        response = initializeFeaturesSeparateByProviders(response);

        // save 'features' and 'features_separate_by_providers' in the memory
        // this.store.dispatch(setFeatures(features));
        this.store.dispatch(setFeaturesSeparateByProviders(response));

        // chance the tab on sidebar in order to show the 'tiles' tab
        this.changeStepNav(2);
      } else {
        // chance the tab on sidebar in order to show the 'search' tab
        this.changeStepNav(1);
        this.snackBar.open('IMAGES NOT FOUND!', '', {
          duration: 10000,
          verticalPosition: 'top',
          panelClass: 'app_snack-bar-error'
        });
      }
    } catch (err) {
      this.changeStepNav(1);
      this.snackBar.open(err.message.toUpperCase(), '', {
        duration: 10000,
        verticalPosition: 'top',
        panelClass: 'app_snack-bar-error'
      });
    } finally {
      this.store.dispatch(removeGroupLayer({
        key: 'alt',
        prefix: 'qls_'
      }));
      this.store.dispatch(closeLoading());
    }
  }

  /** cleaning fields on the search form */
  private resetSearch() {
    this.searchObj = {
      bbox: {
        north: 0.3515602,
        south: -25.0059726,
        west: -68.0273437,
        east: -34.9365234
      },
      selectedCollections: {},
      cloud: null,
      start_date: new Date(new Date().setMonth((new Date().getMonth()) - 1)),
      last_date: new Date(),
      limit: 10
    };
  }

  /** changing displayed menu */
  private changeStepNav(step: number) {
    this.stepToEmit.emit(step);
  }

  /** viewing bounding box on the map */
  public previewBbox(bbox) {
    this.removeLayerBbox();

    const bounds: LatLngBoundsExpression = [
      [bbox.north, bbox.east],
      [bbox.south, bbox.west]
    ];

    const newLayers = rectangle(bounds, {
      color: '#FFF',
      weight: 3,
      fill: false,
      dashArray: '10',
      interactive: false,
      className: 'previewBbox'
    });

    this.store.dispatch(setLayers([newLayers]));
    this.store.dispatch(setBbox(newLayers.getBounds()));
    this.store.dispatch(setPositionMap(newLayers.getBounds()));
  }

  /** removing bounding box of the map */
  public removeLayerBbox() {
    this.store.dispatch(removeGroupLayer({
      key: 'className',
      prefix: 'previewBbox'
    }));
  }

  /** if it exists all selected coordinates, then it returns true, else it returns false */
  public bboxNotEmpty(): boolean {
    return this.searchObj['bbox'].north && this.searchObj['bbox'].south && this.searchObj['bbox'].east && this.searchObj['bbox'].west;
  }
}
