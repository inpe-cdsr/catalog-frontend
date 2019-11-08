import { Layer } from 'leaflet';

/**
 * Interface of each layer
 */
export interface BdcLayer {
  /** (unique) id to layer identification */
  id: string;
  /** layer name shown in the component */
  name: string;
  /** layer state (visible/invisible) */
  enabled: boolean;
  /** tileLayer of leaflet */
  layer: Layer;
}

/**
 * Interface of each WFS layer
 */
export interface BdcLayerWFS {
  /** datastore of the service */
  ds: string;
  /** title of the service */
  title: string;
  /** name to visualization in component */
  name: string;
  /** layer state (visible/invisible) */
  enabled: boolean;
}
