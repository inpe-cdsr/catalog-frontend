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
  public providers: string[];

  /** get infos by store application */
  constructor(private store: Store<ExploreState>) {
    this.store.pipe(select('explore')).subscribe(res => {
      if (res.features) {
        this.features = convertArrayAsObjectToArray(res.features) as Feature[];
      }
      if (res.features_separate_by_providers) {
        // original
        this.providers = Object.keys(res.features_separate_by_providers).filter( f => f !== 'type');
        this.features_separate_by_providers$ = res.features_separate_by_providers;
      }
    });
  }

  public getKeysFromObject(object: Object) : Array<string> {
    // get the keys of an 'object' and sort the list
    return Object.keys(object).sort();
  }

}
