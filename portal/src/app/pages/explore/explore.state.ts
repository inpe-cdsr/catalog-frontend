import { Feature } from './sidenav/collection/collection.interface';
import { Layer, LatLngBoundsExpression } from 'leaflet';

/** State Model - used in Explore module */
export interface ExploreState {
    /** all selected features */
    readonly features: Feature[];
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
