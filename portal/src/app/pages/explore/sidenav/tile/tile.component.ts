// angular
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

// lodash
import * as cloneDeep from 'lodash/cloneDeep';

// state management
import { ExploreState } from 'src/app/pages/explore/explore.state';
import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';

// component
import { DialogCollectionDownloadComponent } from 'src/app/shared/components/dialog-collection-download/dialog-collection-download.component';

// other
// import { FEATURES_BY_PROVIDERS_SAMPLE } from 'src/app/shared/example/feature';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent{

  public features_separate_by_providers$: Object;
  public providers: string[];

  /** get infos by store application */
  constructor(private store: Store<ExploreState>, public dialog: MatDialog) {
    this.store.pipe(select('explore')).subscribe(res => {
      if (res.features_separate_by_providers) {
        // original
        this.providers = Object.keys(res.features_separate_by_providers).filter( feature => feature !== 'type' );
        this.features_separate_by_providers$ = res.features_separate_by_providers;

        // test / example
        // this.providers = Object.keys(FEATURES_BY_PROVIDERS_SAMPLE).filter( feature => feature !== 'type' );
        // this.features_separate_by_providers$ = FEATURES_BY_PROVIDERS_SAMPLE;
      }
    });
  }

  public getKeysFromObject(object: Object): Array<string> {
    // get the keys of an 'object' and sort the array
    return Object.keys(object).sort();
  }

  public openCollectionDownloadDialog(collection_name: string, features: Feature[]): void {
    // create a list with just the necessary attributes of the features
    let features_to_send = [];

    features.forEach((feature: Feature) => {
      let new_feature = {};

      // copying just the necessary attributes in order to avoid overloading of memory
      new_feature['id'] = feature['id'];
      new_feature['assets'] = cloneDeep(feature['assets']);

      features_to_send.push(new_feature);
    })

    this.dialog.open(DialogCollectionDownloadComponent, {
      // width: '600px',
      // height: '550px',
      data: {
        collection_name,
        features: features_to_send
      }
    });
  }

}
