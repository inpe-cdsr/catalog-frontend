
interface StacExtent {
  spatial: Array<number>;
  temporal: Array<String>;
}

export interface StacCollection {
  stac_version: string;
  id: string;
  description: string;
  extent: StacExtent;
}
