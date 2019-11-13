import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { latLng, MapOptions, Layer, geoJSON, Map as MapLeaflet,
  LatLngBoundsExpression, Control, Draw, rectangle } from 'leaflet';
import { GeoJsonObject } from 'geojson';

import * as L from 'leaflet';
import 'leaflet.fullscreen/Control.FullScreen.js';
import 'src/assets/plugins/Leaflet.Coordinates/Leaflet.Coordinates-0.1.5.min.js';
import 'esri-leaflet/dist/esri-leaflet.js';
import * as LE from 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js';

import { BdcLayer, BdcLayerWFS } from './layers/layer.interface';
import { LayerService } from './layers/layer.service';
import { Store, select } from '@ngrx/store';
import { ExploreState } from '../explore.state';
import { setLayers, setPositionMap, setBbox, removeGroupLayer } from '../explore.action';
import { SearchService } from '../sidenav/search/search.service';

/**
 * Map component
 * component to manage and initialize map in explore page
 */
@Component({
  selector: 'app-base-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  /** props with width of the map */
  @Input() width: number;
  /** props with height of the map */
  @Input() height: number;

  /** pointer to reference map */
  public map: MapLeaflet;
  /** object with map settings */
  public options: MapOptions;
  /** layers displayed on the Leaflet control component */
  public layersControl: any;
  /** visible layers on the map */
  public layers$: Layer[];

  /** all overlay layers read and mounted */
  private overlayers: BdcLayer[];
  /** all available base layers for viewing (layer object only) */
  private baseLayers = {};
  /** all overlay layers available for viewing (layer object only) */
  private overlays = {};
  /** bounding box of Map */
  private bbox = null;

  /** start Layer and Seatch Services */
  constructor(
    private ls: LayerService,
    private store: Store<ExploreState>) {
      this.store.pipe(select('explore')).subscribe(res => {
        // add layers
        if (Object.values(res.layers).length > 1) {
          const lyrs = Object.values(res.layers).slice(0, (Object.values(res.layers).length - 1)) as Layer[];
          lyrs.forEach( l => {
            this.map.addLayer(l);
          });
          this.store.dispatch(setLayers([]));
        }
        
        // remove layers by prefix
        if (res.layerGroupToDisabled['key'] && res.layerGroupToDisabled['prefix']) {
          const key = res.layerGroupToDisabled['key'];
          const prefix = res.layerGroupToDisabled['prefix'];
          this.map.eachLayer( l => {
            if (l['options'][key] && l['options'][key].indexOf(prefix) >= 0) {
              this.map.removeLayer(l);
            }
          });
          this.store.dispatch(removeGroupLayer({}));
        }

        // set position map
        if (res.positionMap && res.positionMap !== this.bbox) {
          this.bbox = res.positionMap;
          this.setPosition(res.positionMap);
        }
      });
  }

  /** set layers and initial configuration of the map */
  ngOnInit() {
    this.options = {
      zoom: 5,
      center: latLng(-16, -52)
    };

    this.layersControl = {
      baseLayers: this.baseLayers,
      overlays: this.overlays
    }

    this.getBaseLayers(this.ls.getBaseLayers());
    setTimeout(() => {
      this.mountGridsLayers(this.ls.getGridsLayers());
    }, 1000);
  }

  /** set the visible layers in the layer component of the map */
  private setControlLayers(): void {
    this.layersControl = {
      baseLayers: this.baseLayers,
      overlays: this.overlays
    };
  }

  /**
   * get the layer objects from a list of BdcLayer
   */
  private getBaseLayers(layersList: BdcLayer[]) {
    layersList.forEach((layer: BdcLayer) => {
      this.baseLayers[layer.name] = layer.layer;
    });
  }

  /**
   * get the layer objects from a list of BdcLayerWFS
   * mount the overlayers with GeoJson's consulted from the GeoServer
   */
  private async mountGridsLayers(listLayersId: BdcLayerWFS[]) {
    try {
      this.overlayers = [];

      await listLayersId.forEach( async (layer: BdcLayerWFS) => {
        const responseGeoJson: GeoJsonObject = await this.ls.getGeoJsonByLayer('brazil-data-cube', layer.ds, layer.title);

        const layerGeoJson = geoJSON(responseGeoJson, {});
        this.overlays[layer.name] = layerGeoJson;

        const bdcLayer: BdcLayer = {
          id: layer.title,
          name: layer.name,
          enabled: layer.enabled,
          layer: layerGeoJson
        };
        this.overlayers.push(bdcLayer);
      });

    } catch (err) {
      console.log('mountGridsLayers()');
      console.log('err: ', err);
    } finally {
      this.setControlLayers();

      setTimeout(() => {
        this.applyLayersInMap();
      }, 100);
    }
  }

  /** apply the layers that are visible on the map */
  applyLayersInMap(): void {
    const baseLayer = this.ls.getBaseLayers().filter((l: BdcLayer) => l.id === 'google_hybrid');

    if (this.overlayers[0] && this.overlayers[0].layer) {
      const newLayers: Layer[] = this.overlayers
            .filter((l: BdcLayer) => l.enabled)
            .map((l: BdcLayer) => l && l.layer);

      // set base layer with firsty
      newLayers.unshift(baseLayer[0].layer);
      this.store.dispatch(setLayers(newLayers));

    } else {
      const newLayers = [baseLayer[0].layer];
      this.store.dispatch(setLayers(newLayers));
    }
  }

  /** set position of the Map */
  private setPosition(bounds: LatLngBoundsExpression) {
    this.map.fitBounds(Object.values(bounds).slice(0, 2));
  }

  /** set Draw control of the map */
  private setDrawControl() {
    const drawControl = new Control.Draw({
      draw: {
        marker: false,
        circle: false,
        polyline: false,
        polygon: false,
        circlemarker: false,
        rectangle: {
          shapeOptions: {
            color: '#AAA',
            // color: '#CCC'
          }
        }
      }
    });
    this.map.addControl(drawControl);

    // remove last bbox
    this.map.on(Draw.Event.DRAWSTART, _ => {
      this.map.eachLayer( l => {
        if (l['options'].className === 'previewBbox') {
          this.map.removeLayer(l);
        }
      });
    });

    // add bbox in the map
    this.map.on(Draw.Event.CREATED, e => {
      const layer: any = e['layer'];
      const newLayer = rectangle(layer.getBounds(), {
        color: '#FFF',
        weight: 3,
        fill: false,
        dashArray: '10',
        interactive: false,
        className: 'previewBbox'
      });

      this.map.addLayer(newLayer);
      this.store.dispatch(setBbox(newLayer.getBounds()));
      this.store.dispatch(setPositionMap(newLayer.getBounds()));
    });
  }

  public setScaleControl() {
    L.control.scale({
      imperial: false
    }).addTo(this.map);
  }

  /** set FullScreen option in the map */
  setFullscreenControl() {
    (L.control as any).fullscreen({
      position: 'topleft',
      title: 'Show Map Fullscreen',
      titleCancel: 'Exit Fullscreen',
      content: null,
      forceSeparateButton: true
    }).addTo(this.map);
  }

  /** set Coordinates options in the map */
  setCoordinatesControl() {
    (L.control as any).coordinates({
      position: 'bottomleft',
      decimals: 5,
      decimalSeperator: '.',
      labelTemplateLat: 'Lat: {y}',
      labelTemplateLng: '| Lng: {x}',
      enableUserInput: false,
      useDMS: false,
      useLatLngOrder: true,
    }).addTo(this.map);
  }

  /** set Geocoder options in the map */
  setGeocoderControl() {
    const searchControl = LE.geosearch().addTo(this.map);
    const vm = this;

    searchControl.on('results', data => {
      vm.map.eachLayer( l => {
        if (l['options'].className === 'previewBbox') {
          vm.map.removeLayer(l);
        }
      });

      for (let i = data.results.length - 1; i >= 0; i--) {
        const newLayer = rectangle(data.results[i].bounds, {
          color: '#FFF',
          weight: 3,
          fill: false,
          dashArray: '10',
          interactive: false,
          className: 'previewBbox'
        });

        vm.map.addLayer(newLayer);
        vm.store.dispatch(setBbox(newLayer.getBounds()));
        vm.store.dispatch(setPositionMap(newLayer.getBounds()));
      }
    });
  }

  /** event used when change Map */
  onMapReady(map: MapLeaflet) {
    this.map = map;
    this.setFullscreenControl();
    this.setDrawControl();
    this.setCoordinatesControl();
    this.setGeocoderControl();
    this.setScaleControl();
  }
}
