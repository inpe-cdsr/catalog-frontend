/**
 * Properties
 */
interface Properties {
  datetime: string;
}

/**
 * Link
 */
interface Link {
  href: string;
  rel: string;
}

/**
 * Asset
 */
interface Asset {
  href: string;
  type?: string;
  'eo:bands'?: number[];
  title?: string;
}

/**
 * Assets
 */
interface Assets {
  thumbnail: Asset;
  blue?: Asset;
  green?: Asset;
  red?: Asset;
  nir?: Asset;
  index?: Asset;
  metadata?: Asset;
  B1?: Asset;
  B2?: Asset;
  B3?: Asset;
  B4?: Asset;
  B5?: Asset;
  B6: Asset;
  B7?: Asset;
  B8?: Asset;
  B9?: Asset;
  B10?: Asset;
  B11?: Asset;
  ANG?: Asset;
  MTL?: Asset;
  BQA?: Asset;
}

/**
 * Feature (https://github.com/radiantearth/stac-spec/blob/v0.7.0/item-spec/item-spec.md#item-fields)
 */
export interface Feature {
    id: string;
    type?: string;
    geometry?: object;
    bbox?: Array<number>;
    // properties?: Properties;
    properties?: object;
    links?: Array<Link>;
    assets?: Assets;
    /** this field is not returned by STAC response, it is created on TS */
    enabled: boolean;
}

/**
 * Collection
 * interface of each Collection
 */
export interface Collection {
    name: string;
    features: Feature[];
    /** this field is not returned by STAC response, it is created on JS */
    enabled: boolean;
}
