// angular
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';

// leaflet
import { imageOverlay,  Layer, geoJSON } from 'leaflet';

// state management
import { ExploreState } from 'src/app/pages/explore/explore.state';
import { setLayers, setPositionMap, setFeatures } from 'src/app/pages/explore/explore.action';

// interface
import { Feature } from '../collection.interface';

// other
import { convertArrayAsObjectToArray } from 'src/app/shared/helpers/common';
import { DialogFeatureComponent } from 'src/app/shared/components/dialog-feature/dialog-feature.component';


@Component({
  selector: 'app-feature-table-pagination',
  templateUrl: './feature-table-pagination.component.html',
  styleUrls: ['./feature-table-pagination.component.scss']
})
export class FeatureTablePaginationComponent implements OnInit {

  displayedColumns: string[] = ['quicklook', 'id', 'actions'];
  dataSource: MatTableDataSource<Feature>;
  pageSizeOptions: number[] = [3, 5, 10, 20];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // I receive this attribute by binding, because of that, the '@Input()' decorator
  @Input() features: Array<Feature> = [];

  // enabled layers on the map
  private layers: Layer[];

  // get infos by store application
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private store: Store<ExploreState>) {
    this.store.pipe(select('explore')).subscribe(res => {
      if (res.layers) {
        this.layers = convertArrayAsObjectToArray(res.layers) as Layer[];
      }
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Feature>(this.features);
    this.dataSource.paginator = this.paginator;
  }

  doesFeatureHaveTheKey (feature, key) {
    return key in feature;
  }

  /** convert date to USA format */
  public getFormattedDate(dateString: string): string {
    const dates = dateString.split('/');
    const date = (new Date(dates[0])).toLocaleDateString();
    return `${date}`;
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
      this.features = this.features.map( f => {
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
    this.features = this.features.map( f => {
      if (f.id === featureId) {
        f['actions'] = !(f['actions'] === true);
      }
      return f;
    });
    this.store.dispatch(setFeatures(this.features));
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
