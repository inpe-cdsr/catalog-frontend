import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Feature } from 'src/app/pages/explore/sidenav/collection/collection.interface';
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
  /** bands of the cube */
  public bands: object = {};
  /** bands name */
  public bandsList = [];

  /** receive infos to display in this component */
  constructor(
    public dialogRef: MatDialogRef<DialogFeatureComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.feature = data.feature;
      data['bands'].forEach( (band: string) => {
        this.bands[band] = true;
      });
      this.bandsList = data['bands'];
  }

  /** format date to USA template */
  getDateFormated(date: string) {
    return formatDateUSA(new Date(date));
  }

}
