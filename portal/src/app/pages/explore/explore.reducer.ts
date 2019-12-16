import { createReducer, on } from '@ngrx/store';
import {
  showLoading,
  closeLoading,
  setLayers,
  setBbox,
  setPositionMap,
  setFeatures,
  setFeaturesSeparateByProviders,
  removeGroupLayer,
  setFeatureToDownload,
  removeFeatureToDownload,
  removeAllFeaturesToDownload,
  setProvidersInfos
} from './explore.action';
import { ExploreState } from './explore.state';

/** initial values to Explore State */
const initialState: ExploreState = {
  features: [],
  features_separate_by_providers: {},
  layerGroupToDisabled: [],
  layers: [],
  positionMap: null,
  featuresToDownload: [],
  loading: false,
  bbox: null,
  providersInfos: {}
};

/**
 * reducer to manage explore state
 * set new values in ExploreState
 */
export const reducer = createReducer(initialState,
  on(setFeatures, (state, payload) => {
    return { ...state, features: payload };
  }),
  on(removeGroupLayer, (state, payload) => {
    return { ...state, layerGroupToDisabled: payload };
  }),
  on(setFeaturesSeparateByProviders, (state, payload) => {
    return { ...state, features_separate_by_providers: payload };
  }),
  on(setLayers, (state, payload) => {
    return { ...state, layers: payload };
  }),
  on(setPositionMap, (state, payload) => {
    return { ...state, positionMap: payload };
  }),
  on(setBbox, (state, payload) => {
    return { ...state, bbox: payload };
  }),
  on(setFeatureToDownload, (state, payload) => {
    if (state.featuresToDownload.filter( f => f.id === payload.id ).length === 0) {
      const features = state.featuresToDownload;
      features.push(payload);
      return { ...state, featuresToDownload: features };
    } else {
      return state;
    }
  }),
  on(removeFeatureToDownload, (state, payload) => {
    const features = state.featuresToDownload.filter( f => f.id !== payload.id );
    return { ...state, featuresToDownload: features };
  }),
  on(removeAllFeaturesToDownload, (state, _) => {
    return { ...state, featuresToDownload: [] };
  }),
  on(showLoading, (state) => {
    return { ...state, loading: true };
  }),
  on(closeLoading, (state) => {
    return { ...state, loading: false };
  }),
  on(setProvidersInfos, (state, payload) => {
    return { ...state, providersInfos: payload };
  })
);
