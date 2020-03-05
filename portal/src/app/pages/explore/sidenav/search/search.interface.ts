
/** BboxInterface */
export interface BboxInterface {
  north: number;
  south: number;
  west: number;
  east: number;
}

/** FormFieldsInterface */
export interface FormFieldsInterface {
  bbox: BboxInterface;
  selectedCollections: object;
  cloud_cover: number;
  start_date: Date;
  end_date: Date;
  limit: number;
}
