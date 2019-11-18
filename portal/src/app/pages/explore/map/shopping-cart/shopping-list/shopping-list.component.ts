import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';
import { formatDateUSA } from 'src/app/shared/helpers/date';
import { Store } from '@ngrx/store';
import { ExploreState } from '../../../explore.state';
import { removeFeatureToDownload, removeAllFeaturesToDownload } from '../../../explore.action';

/**
 * Dialog Features
 * view infos of the cube and downloads assets
 */
@Component({
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  public features: Feature[];

  /** receive infos to display in this component */
  constructor(
    private store: Store<ExploreState>,
    public dialogRef: MatDialogRef<ShoppingListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.features = data.features;
  }

  removeFeatureOfDownload(feature: Feature) {
    this.features = this.features.filter( f => f.id !== feature.id );
    this.store.dispatch(removeFeatureToDownload(feature));
  }

  clearList() {
    this.features = [];
    this.store.dispatch(removeAllFeaturesToDownload());
  }

  /** format date to USA template */
  getFormattedDate(date: string) {
    return formatDateUSA(new Date(date));
  }

  getCollectionFromFeature(feature: Feature): string {
    return 'collection' in feature ? feature['collection'] : feature['properties']['collection'];
  }

  getCloudCover(feature: Feature) {
    return 'eo:cloud_cover' in feature['properties'] ? feature['properties']['eo:cloud_cover'] : feature['properties']['cloud_cover'];
  }

  formatID(id: string) {
    return `${id.substring(0, 13)} ${id.length > 13 ? '...' : ''}`;
  }

}
