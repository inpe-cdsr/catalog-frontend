import { Layer, LatLngBoundsExpression } from 'leaflet';

import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';


/** State Model - used in Explore module */
export interface ExploreState {
  /** all selected features */
  readonly features: Feature[];
  /** all selected features separate by providers */
  readonly features_separate_by_providers: Object;
  /** layers visible in the map */
  readonly layers: Layer[];
  /** bounding box of the map */
  readonly positionMap: LatLngBoundsExpression;
  /** range (start-end) with selected dates */
  readonly rangeTemporal: Date[];
  /** selected bounding box */
  readonly bbox: LatLngBoundsExpression;
  /** status visible - loading component */
  readonly loading: boolean;
}
