import { Action, createReducer, on } from '@ngrx/store';
import {
  showLoading,
  closeLoading,
  setLayers,
  setBbox,
  setDatasetSelectedCollections,
  setPositionMap,
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
  datasetSelectedCollections: {},
  providersInfos: {}
};

/**
 * reducer to manage explore state
 * set new values in ExploreState
 */
const __reducer = createReducer(initialState,
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
  on(setDatasetSelectedCollections, (state, payload) => {
    return { ...state, datasetSelectedCollections: payload };
  }),
  on(setFeatureToDownload, (state, payload) => {
    if (state.featuresToDownload.filter( f => f.id === payload['id'] ).length === 0) {
      const features = state.featuresToDownload;
      features.push(payload);
      return { ...state, featuresToDownload: features };
    } else {
      return state;
    }
  }),
  on(removeFeatureToDownload, (state, payload) => {
    const features = state.featuresToDownload.filter( f => f.id !== payload['id'] );
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

export function reducer(state: ExploreState | undefined, action: Action) {
  return __reducer(state, action);
}
