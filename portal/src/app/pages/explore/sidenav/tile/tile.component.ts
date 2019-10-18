// angular
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

// state management
import { ExploreState } from 'src/app/pages/explore/explore.state';

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
  constructor(private store: Store<ExploreState>) {
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

  public openDownloadDialog(collection: string): void {
    console.log('openDownloadDialog')
    // TODO: download a txt file with the list of URLs to download based on 'collection'
  }

}
