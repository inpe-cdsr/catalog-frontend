import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';
import { formatDateUSA } from '../../helpers/date';

import { convertObjectToMap } from 'src/app/shared/helpers/common';

/**
 * Dialog Features
 * view infos of the cube and downloads assets
 */
@Component({
  selector: 'app-dialog-feature',
  templateUrl: './dialog-feature.component.html',
  styleUrls: ['./dialog-feature.component.scss']
})
export class DialogFeatureComponent {

  /** feature selected by user */
  public feature: Feature;

  /** receive infos to display in this component */
  constructor(
    public dialogRef: MatDialogRef<DialogFeatureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.feature = data.feature;
  }

  // add static function as a class method to be used on the template
  convertObjectToMap = convertObjectToMap;

  /** format date to USA template */
  getFormattedDate(date: string) {
    return formatDateUSA(new Date(date));
  }

  getCollectionFromFeature(feature: Feature): string {
    return 'collection' in feature ? feature['collection'] : feature['properties']['collection'];
  }

  printValue(value: any): any {
    // if value is instance of Array, then I make it look nice
    if (value instanceof Array) {
      let values = value.map( item => item['name'] );
      // return JSON.stringify(values, undefined, 2);
      return values;
    }

    // if value is instance of Object, then I make it look nice
    if (value instanceof Object) {
      return JSON.stringify(value, undefined, 2);
    }

    // other types, such as: string, integer, float, etc.
    return value;
  }
}
