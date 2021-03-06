// angular
import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { MatSnackBar, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { Store, select } from '@ngrx/store';

// leaflet
import { rectangle, LatLngBoundsExpression } from 'leaflet';

// explore state
import { ExploreState } from '../../explore.state';
import {
  showLoading,
  closeLoading,
  setLayers,
  setPositionMap,
  setFeaturesSeparateByProviders,
  setBbox,
  removeGroupLayer
} from '../../explore.action';

// tile component
import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';

// other
import { formatDateUSA } from 'src/app/shared/helpers/date';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/shared/helpers/date.adapter';
import { isObjectEmpty, isNumeric, isValueNotNullAndNotUndefined } from 'src/app/shared/helpers/common';

// search component
import { SearchService } from './search.service';
import { FormFieldsInterface } from './search.interface';


// function getCollectionsFollowingSTACComposeStandard(providers_with_collections: object): string[]{
//   let collectionsFollowingSTACComposeStandard: string[] = [];

//   for (let provider in providers_with_collections) {
//     // 'type' is not a provider, then ignore it
//     if (provider === 'type') {
//       continue;
//     }

//     let collections: string[] = providers_with_collections[provider];

//     for (let collection of collections) {
//       collectionsFollowingSTACComposeStandard.push(provider + ':' + collection);
//     }
//   }

//   return collectionsFollowingSTACComposeStandard;
// }


function getProvidersPropertyFollowingSTACComposeStandard(selectedProvidersWithCollections: object, method: string, query: object): object[]{
  let providers = [];

  for (let provider in selectedProvidersWithCollections) {
    if (selectedProvidersWithCollections.hasOwnProperty(provider)) {
      let collections = selectedProvidersWithCollections[provider];

      let __provider = {
        "name": provider,
        "collections": collections.map((collection: string) => ({name: collection}))
      }

      // - Add method to provider

      // if the provider is CBERS4-AWS, I add the method to GET, because this provider just works with GET method
      if (provider.toLowerCase() === 'cbers4-aws') {
        __provider['method'] = 'GET';
      // other providers can use the passed one
      } else {
        __provider['method'] = method;
      }

      // - Add query to provider

      // create a copy of query in order to not change original one
      let query_copy = {...query};

      // if query is not empty, then I add it to the provider
      if (!isObjectEmpty(query_copy)){
        // if the provider is the dev. seed, then I update to the correct `cloud_cover` field
        if (provider.toLowerCase() === 'landsat8-sentinel2-aws' && 'cloud_cover' in query_copy) {
          Object.defineProperty(query_copy, 'eo:cloud_cover', Object.getOwnPropertyDescriptor(query_copy, 'cloud_cover'));
          delete query_copy['cloud_cover'];
        }

        __provider['query'] = query_copy;
      }

      // - Add the provider to the list of providers
      providers.push(__provider);
    }
  }

  return providers;
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


/** initialize each feature collection and features with their default extra values */
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

  public formFields: FormFieldsInterface;
  public formGroup: FormGroup;

  // max limit
  public searchFormMaxLimit = window['__env'].searchFormMaxLimit;

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
        this.formFields['bbox'] = {
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

        this.formFields['selectedCollections'] = res.datasetSelectedCollections;
      }
    });

    this.formGroup = this.fb.group({
      north: ['', [Validators.required]],
      west: ['', [Validators.required]],
      east: ['', [Validators.required]],
      south: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      cloud_cover: ['', [Validators.min(0),  Validators.max(100)]],
      limit: ['', [Validators.required, Validators.min(0),  Validators.max(this.searchFormMaxLimit)]]
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
      validateForm(this.formGroup);

      // if the object is empty, then raise an exception
      if (isObjectEmpty(this.formFields['selectedCollections'])) {
        throw new Error("You must choose at least one collection in the previous tab!");
      }

      this.store.dispatch(showLoading());

      // get the start and end date, and format them
      const startDate = formatDateUSA(new Date(this.formFields['start_date']));
      const endDate = formatDateUSA(new Date(this.formFields['end_date']));

      const bbox = Object.values(this.formFields['bbox']);

      let query = {};

      // if cloud cover was added, then add it to the query
      if (isNumeric(this.formFields['cloud_cover'])) {
        query = {
          "cloud_cover": {
            "lte": this.formFields['cloud_cover']
          }
        }
      }

      const providers = getProvidersPropertyFollowingSTACComposeStandard(
        this.formFields['selectedCollections'], 'POST', query
      );

      let data = {
        "providers": providers,
        "bbox": [bbox[2], bbox[1], bbox[3], bbox[0]],
        "datetime": `${startDate}T00:00:00/${endDate}T23:59:00`,
        "limit": this.formFields['limit']
      }

      // console.log('\n data: ', data);

      // look for features on STAC service
      let response = await this.ss.postStacSearch(data);

      // console.log('\n response: ', response);

      // if 'response' is not empty...
      if (!isObjectEmpty(response)) {
        response = initializeFeaturesSeparateByProviders(response);

        // save 'features_separate_by_providers' in the memory
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
    this.formFields = {
      bbox: {
        north: 11,
        south: -37,
        west: -81,
        east: -30
      },
      selectedCollections: {},
      cloud_cover: null,
      start_date: new Date(new Date().setMonth((new Date().getMonth()) - 1)),
      end_date: new Date(),
      limit: 100
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

  /** if all coordinates are not emtpy, then it returns true, else it returns false */
  public isBboxNotEmpty(): boolean {
    return isValueNotNullAndNotUndefined(this.formFields.bbox.north) &&
           isValueNotNullAndNotUndefined(this.formFields.bbox.south) &&
           isValueNotNullAndNotUndefined(this.formFields.bbox.east) &&
           isValueNotNullAndNotUndefined(this.formFields.bbox.west);
  }
}
