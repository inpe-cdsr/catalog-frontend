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

export interface Grid {
  /** id (unique) to layer identification */
  id: string;
  /** layer name shown in the component */
  name: string;
  /** layer state (visible/invisible) */
  enabled: boolean;
  /** tileLayer in leaflet */
  layer: Layer;
  style?: string;
}
