// angular
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

// state management
import { ExploreState } from 'src/app/pages/explore/explore.state';
import { convertArrayAsObjectToArray } from 'src/app/shared/helpers/common';
import { Feature } from './tile.interface';

// other
// import { FEATURES, FEATURES_BY_PROVIDERS_SAMPLE } from 'src/app/shared/example/feature';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent{

  /** all selected features separate by providers */
  public features_separate_by_providers$: Object;
  public features: Feature[] = [];

  /** get infos by store application */
  constructor(private store: Store<ExploreState>) {
    this.store.pipe(select('explore')).subscribe(res => {
      if (res.features) {
        this.features = convertArrayAsObjectToArray(res.features) as Feature[];
      }
      if (res.features_separate_by_providers) {
        // original
        this.features_separate_by_providers$ = res.features_separate_by_providers;

        // test/example (it can be removed)
        // this.features_separate_by_providers$ = FEATURES_BY_PROVIDERS_SAMPLE;

        // if 'object' has attribute 'type', then remove it, because it is unnecessary
        if ('type' in this.features_separate_by_providers$) {
          delete this.features_separate_by_providers$['type'];
        }
      }
    });
  }

  public getKeysFromObject(object: Object) : Array<string> {
    // get the keys of an 'object' and sort the list
    return Object.keys(object).sort();
  }

}
