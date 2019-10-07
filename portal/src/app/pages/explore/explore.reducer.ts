import { createReducer, on } from '@ngrx/store';
import {
  showLoading,
  closeLoading,
  setLayers,
  setBbox,
  setPositionMap,
  setRangeTemporal,
  setFeatures,
  setFeaturesSeparateByProviders
} from './explore.action';
import { ExploreState } from './explore.state';

/** initial values to Explore State */
const initialState: ExploreState = {
  features: [],
  features_separate_by_providers: {},
  layers: [],
  positionMap: null,
  loading: false,
  bbox: null,
  rangeTemporal: []
};

/**
 * reducer to manage explore state
 * set new values in ExploreState
 */
export const reducer = createReducer(initialState,
  on(setFeatures, (state, payload) => {
    return { ...state, features: payload };
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
  on(setRangeTemporal, (state, payload) => {
    return { ...state, rangeTemporal: payload };
  }),
  on(setBbox, (state, payload) => {
    return { ...state, bbox: payload };
  }),
  on(showLoading, (state) => {
    return { ...state, loading: true };
  }),
  on(closeLoading, (state) => {
    return { ...state, loading: false };
  }),
);
