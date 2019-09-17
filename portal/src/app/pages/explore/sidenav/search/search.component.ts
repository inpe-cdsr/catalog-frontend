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
    this.getProviders();
    this.resetSearch();
  }

  /** get available cubes */
  private async getProviders() {
    try {
      const response = await this.ss.getProviders();
      this.providers = Object.keys(response.providers);
    } catch(err) {
    }
  }

  public async getCollections() {
    try {
      const response = await this.ss.getCollections(this.searchObj['providers']);
      this.collections = [];
      Object.keys(response).forEach( p => {
        this.collections = [...this.collections, ...response[p].map( c => `${p.toLocaleLowerCase()}: ${c}`) ]
      })
    } catch(err) {
    }
  }

  /** search feature/items in STAC-COMPOSE */
  public async search() {
    try {
      this.store.dispatch(showLoading());

      // set FIRST DAY in start date and LAST DAY in last date
      const startDate = new Date(this.searchObj['start_date'].setDate(1));
      const lastDate = new Date(this.searchObj['last_date'].setDate(getLastDateMonth(new Date(this.searchObj['last_date']))));

      const bbox = Object.values(this.searchObj['bbox']);
      let query = `collections=${this.searchObj['collections'].join(',').replace(/ /g, '')}`;
      query += `&bbox=${bbox[2]},${bbox[1]},${bbox[3]},${bbox[0]}`;
      query += `&time=${formatDateUSA(startDate)}T00:00:00`;
      query += `/${formatDateUSA(lastDate)}T23:59:00`;
      query += `&limit=10000`;
      if (parseInt(this.searchObj['cloud']) > 0) {
        query += `&cloud=${this.searchObj['cloud']}`;
      }

      const response = await this.ss.searchSTAC(query);
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
