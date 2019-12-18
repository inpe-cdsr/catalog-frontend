import { Layer, LatLngBoundsExpression } from 'leaflet';

import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';


/** State Model - used in Explore module */
export interface ExploreState {
  /** all selected features */
  readonly features: Feature[];
  /** all selected features separate by providers */
  readonly features_separate_by_providers: Object;
  /** list of group layer to remove in the map */
  readonly layerGroupToDisabled: object;
  /** layers visible in the map */
  readonly layers: Layer[];
  /** bounding box of the map */
  readonly positionMap: LatLngBoundsExpression;
  readonly featuresToDownload: Feature[];
  /** selected bounding box */
  readonly bbox: LatLngBoundsExpression;
  /** selected collections */
  readonly datasetSelectedCollections: object;
  /** status visible - loading component */
  readonly loading: boolean;
}
