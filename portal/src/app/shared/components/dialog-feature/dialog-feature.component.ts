import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';
import { formatDateUSA } from '../../helpers/date';

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

  /** format date to USA template */
  getFormattedDate(date: string) {
    return formatDateUSA(new Date(date));
  }

  getCollectionFromFeature(feature: Feature): string {
    return 'collection' in feature ? feature['collection'] : feature['properties']['collection'];
  }
}
