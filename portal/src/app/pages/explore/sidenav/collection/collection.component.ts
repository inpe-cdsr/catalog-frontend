// angular
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

// state management
import { ExploreState } from 'src/app/pages/explore/explore.state';

// other
// import { FEATURES, FEATURES_BY_PROVIDERS_SAMPLE } from 'src/app/shared/example/feature';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent{

  /** all selected features separate by providers */
  public features_separate_by_providers$: Object;

  /** get infos by store application */
  constructor(private store: Store<ExploreState>) {
    this.store.pipe(select('explore')).subscribe(res => {
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
