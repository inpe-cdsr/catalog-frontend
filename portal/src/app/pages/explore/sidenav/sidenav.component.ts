// angular
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

// state management
import { ExploreState } from 'src/app/pages/explore/explore.state';

// interface
import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';

// other
// import { FEATURES } from 'src/app/shared/example/feature';
import { convertArrayAsObjectToArray } from 'src/app/shared/helpers/common';


/**
 * Sidenav component
 * simple static component
 */
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  /** step opened menu of the sidenav */
  public step = 0;  // default
  // public step = 1;
  /** features selected by search */
  public features$: Feature[] = [];

  /** get infos by store application */
  constructor(private store: Store<ExploreState>) {
    this.store.pipe(select('explore')).subscribe(res => {
      if (res.features) {
        // original
        this.features$ = convertArrayAsObjectToArray(res.features) as Feature[];

        // test/example (this line can be removed) (tile.component must be updated as well)
        // this.features$ = FEATURES as Feature[];
      }
    });
  }

  /** change opened menu */
  changeStep(value: number) {
    this.step = value;
  }

}
