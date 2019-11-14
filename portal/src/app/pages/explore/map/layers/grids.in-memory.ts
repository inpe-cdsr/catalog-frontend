import { Grid } from './layer.interface';

/**
 * return a list of grids from the BDC project
 */
export const Grids: Grid[] = [
  {
    id: 'grid_ibge_states',
    enabled: false,
    name: 'STATES',
    layer: null,
    style: 'states'
  },
  {
    id: 'grid_cbers4_mux',
    enabled: false,
    name: 'CBERS4',
    layer: null
  },
  {
    id: 'grid_landsat_tm_amsul',
    enabled: false,
    name: 'WRS',
    layer: null
  }
];
