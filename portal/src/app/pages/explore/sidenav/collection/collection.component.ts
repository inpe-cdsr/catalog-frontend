// angular
import { Component } from '@angular/core';
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


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {

  /** all selected features in the search form */
  public features$: Feature[] = [];
  /** all selected features separate by providers */
  public features_separate_by_providers$: Feature[] = [];
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
        this.features$ = convertArrayAsObjectToArray(res.features) as Feature[];
        console.log('collection.features$: ', this.features$);
      }
      if (res.features_separate_by_providers) {
        this.features_separate_by_providers$ = res.features_separate_by_providers;
        console.log('collection.features_separate_by_providers$: ', this.features_separate_by_providers$);
      }
      if (res.layers) {
        this.layers = convertArrayAsObjectToArray(res.layers) as Layer[];
      }
    });
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
