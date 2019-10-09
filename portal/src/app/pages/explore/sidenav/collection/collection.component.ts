// angular
import { Component, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';

// leaflet
import { imageOverlay,  Layer, geoJSON, } from 'leaflet';

// state management
import { ExploreState } from '../../explore.state';
import { setLayers, setPositionMap, setFeatures } from '../../explore.action';

import { Feature } from './collection.interface';
import { DialogFeatureComponent } from 'src/app/shared/components/dialog-feature/dialog-feature.component';

// other
import { convertArrayAsObjectToArray } from 'src/app/shared/helpers/common';
import { FEATURES, FEATURES_BY_PROVIDERS, FEATURES_BY_PROVIDERS_SAMPLE } from 'src/app/shared/example/feature';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent{

  /** all selected features in the search form */
  public features$: Feature[] = [];
  /** all selected features separate by providers */
  public features_separate_by_providers$: Object;
  /** selected period in the slider */
  public period: number;
  /** value of the opacity cube in the map */
  public opacity = 10;
  /** status visible opacity box */
  public opacityEnabled = false;
  /** layers enabled inthe map */
  private layers: Layer[];

  /** get infos by store application */
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private store: Store<ExploreState>) {
    this.store.pipe(select('explore')).subscribe(res => {
      if (res.features) {
        // original
        // this.features$ = convertArrayAsObjectToArray(res.features) as Feature[];

        // example (it can be removed)
        this.features$ = FEATURES as Feature[];

        console.log('collection.features$: ', this.features$);
      }
      if (res.features_separate_by_providers) {
        // original
        // this.features_separate_by_providers$ = res.features_separate_by_providers;

        // example (it can be removed)
        this.features_separate_by_providers$ = FEATURES_BY_PROVIDERS_SAMPLE;

        // if 'object' has attribute 'type', then remove it, because it is unnecessary
        if ('type' in this.features_separate_by_providers$) {
          delete this.features_separate_by_providers$['type'];
        }

        console.log('collection.features_separate_by_providers$: ', this.features_separate_by_providers$);
      }
      if (res.layers) {
        this.layers = convertArrayAsObjectToArray(res.layers) as Layer[];
      }
    });
  }

  getKeysFromObject(object) : Array<string> {
    // get the keys of an 'object' and sort the list
    return Object.keys(object).sort();
  }

  /** convert date to USA format */
  public getDateFormated(dateStr: string): string {
    const dates = dateStr.split('/');
    const startDate = (new Date(dates[0])).toLocaleDateString();
    return `${startDate}`;
  }

  /** enable or disable cube in the map */
  public onChangeLayer(event, feature) {
    if (event.checked) {
      this.features$ = this.features$.map( (f: any) => {
        if (f.id == feature.id) {
          f['enabled'] = true;
        }
        return f;
      });

      const featureGeoJson = geoJSON(feature);
      const bounds = featureGeoJson.getBounds();
      const newlayer = imageOverlay(feature.assets.thumbnail.href, bounds, {
        'alt': `qls_${feature.id}`
      }).setZIndex(999);
      this.layers.push(newlayer);

      this.store.dispatch(setLayers(this.layers));
      this.snackBar.open('LAYERS ENABLED!', '', {
        duration: 2000,
        verticalPosition: 'top',
        panelClass: 'app_snack-bar-success'
      });

    } else {
      this.features$ = this.features$.map( f => {
        if (f.id == feature.id) {
          f['enabled'] = false;
        }
        return f;
      });

      const newLayers = this.layers.filter( lyr => !lyr['options'].alt || (lyr['options'].alt && lyr['options'].alt != `qls_${feature.id}`) );
      this.store.dispatch(setLayers(newLayers));
      this.snackBar.open('LAYERS DISABLED!', '', {
        duration: 2000,
        verticalPosition: 'top',
        panelClass: 'app_snack-bar-success'
      });
    }
  }

  /** set zoom in the feature/item of the map */
  public setZoomByFeature(feature: any) {
    const featureGeoJson = geoJSON(feature);
    const bounds = featureGeoJson.getBounds();
    this.store.dispatch(setPositionMap(bounds));
  }

  /** enable or disable actions box in the feature */
  public enableFeatureActions(featureId: string) {
    this.features$ = this.features$.map( f => {
      if (f.id === featureId) {
        f['actions'] = !(f['actions'] === true);
      }
      return f;
    });
    this.store.dispatch(setFeatures(this.features$));
  }

  /** open dialog with features infos */
  public viewFeatureDetails(feature: Feature) {
    const bands = []
    Object.keys(feature['assets']).forEach((a: any) => {
      if (a !== 'thumbnail' && (!feature['assets'][a]['type'] || (feature['assets'][a]['type'] && feature['assets'][a]['type'].indexOf('geotiff') >= 0)) ){
        bands.push(a)
      }
    });
    this.dialog.open(DialogFeatureComponent, {
      width: '600px',
      height: '550px',
      data: {
        feature,
        bands
      }
    });
  }

}
