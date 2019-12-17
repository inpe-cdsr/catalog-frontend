import { createAction, props } from '@ngrx/store';

import { Layer, LatLngBounds } from 'leaflet';

import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';


/**
 * set Features in store application
 */
export const setFeatures = createAction(
    '[Explore Component] Features',
    props<Feature[]>()
);

/**
 * set Features in store application
 */
export const setFeaturesSeparateByProviders = createAction(
  '[Explore Component] Features Separate by Providers',
  props<Object>()
);

/**
 * set Layers enabled in the map
 */
export const setLayers = createAction(
    '[Map Component] Layers',
    props<Layer[]>()
);

/**
 * remove Layers group enabled in the map
 */
export const removeGroupLayer = createAction(
    '[Map Component] name group layer',
    props<object>()
);

/**
 * set position of the map
 */
export const setPositionMap = createAction(
    '[Map Component] Position',
    props<LatLngBounds>()
);

/**
 * set Bounding Box selected in search form
 */
export const setBbox = createAction(
    '[Map Component] Bounding Box',
    props<LatLngBounds>()
);

/**
 * set selected collections from Dataset Component
 */
export const setDatasetSelectedCollections = createAction(
  '[Dataset Component] Selected Collections',
  props<LatLngBounds>()
);

/**
 * add feature to download
 */
export const setFeatureToDownload = createAction(
    '[Map Component] Feature Download',
    props<Feature>()
);

/**
 * remove feature to download
 */
export const removeFeatureToDownload = createAction(
    '[Map Component] Feature removed of Download',
    props<Feature>()
);

/**
 * remove all features to download
 */
export const removeAllFeaturesToDownload = createAction(
    '[Map Component] Features removed of Download'
);

/** set loading as true */
export const showLoading = createAction(
    '[Loading Component] showLoading'
);

/** set loading as false */
export const closeLoading = createAction(
    '[Loading Component] closeLoading'
);
