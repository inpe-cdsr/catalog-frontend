// angular
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {  MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';

// leaflet
import { imageOverlay, geoJSON } from 'leaflet';

// state management
import { ExploreState } from 'src/app/pages/explore/explore.state';
import { setLayers, setPositionMap, removeGroupLayer, setFeatureToDownload } from 'src/app/pages/explore/explore.action';

// interface
import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';

// other
import { DialogFeatureComponent } from 'src/app/shared/components/dialog-feature/dialog-feature.component';
import { formatDateUSA } from 'src/app/shared/helpers/date';


@Component({
  selector: 'app-feature-table-pagination',
  templateUrl: './feature-table-pagination.component.html',
  styleUrls: ['./feature-table-pagination.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeatureTablePaginationComponent implements OnInit {

  public page = {}

  // I receive this attribute by binding, because of that, I use '@Input()' decorator
  @Input() features: Array<Feature> = [];
  @Input() collection: string;
  @Input() providerInfos: object = {};

  // get infos by store application
  constructor(
    public dialog: MatDialog,
    private store: Store<ExploreState>) {
  }

  ngOnInit() {
    this.page[this.collection] = {
      page: 1,
      perPage: 6
    }
  }

  /** enable or disable cube in the map */
  public onChangeLayer(event, feature) {
    if (event.checked) {
      this.features = this.features.map( (f: any) => {
        if (f.id == feature.id) {
          f['enabled'] = true;
        }
        return f;
      });

      let popupMessage = `
        <p><b>ID</b>: ${ feature.id }</p>
        <p><b>Date</b>: ${ formatDateUSA(new Date(feature.properties.datetime)) }</p>
        <p><b>Collection</b>: ${ 'collection' in feature ? feature['collection'] : feature['properties']['collection'] }</p>
        <p><b>Properties</b>:</p>
      `;

      // add the properties to the popup message
      for (let property in feature.properties) {
        popupMessage += `<p><b>- ${ property }</b>: ${ feature.properties[property] }</p>`
      }

      const featureGeoJson = geoJSON(feature);
      const bounds = featureGeoJson.getBounds();
      const newlayer = imageOverlay(feature.assets.thumbnail.href, bounds, {
        'alt': `qls_${feature.id}`,
        interactive: true
      }).setZIndex(999).bindPopup( _ => {
        return popupMessage;
      });

      this.store.dispatch(setLayers([newlayer]));
    } else {
      this.features = this.features.map( f => {
        if (f.id == feature.id) {
          f['enabled'] = false;
        }
        return f;
      });

      this.store.dispatch(removeGroupLayer({
        key: 'alt',
        prefix: `qls_${feature.id}`
      }));
    }
  }

  /** set zoom in the feature/item of the map */
  public setZoomByFeature(feature: any) {
    const featureGeoJson = geoJSON(feature);
    const bounds = featureGeoJson.getBounds();
    this.store.dispatch(setPositionMap(bounds));
  }

  /** open dialog with features infos */
  public viewFeatureDetails(feature: Feature) {
    this.dialog.open(DialogFeatureComponent, {
      data: {
        feature
      }
    });
  }

  public getInfosFeature(feature) {
    return `
      ${formatDateUSA(new Date(feature.properties.datetime))}
    `;
  }

  public addToShopping(feature) {
    this.store.dispatch(setFeatureToDownload(feature));
  }

}
