// angular
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Feature } from './collection/collection.interface';
import { ExploreState } from '../explore.state';

// other
import { convertArrayAsObjectToArray } from 'src/app/shared/helpers/common';
import { FEATURES } from 'src/app/shared/example/feature';


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
  // default
  // public step = 0;
  public step = 1;
  /** features selected by search in this period */
  public features$: Feature[] = [];

  /** get infos by store application */
  constructor(private store: Store<ExploreState>) {
    this.store.pipe(select('explore')).subscribe(res => {
      if (res.features) {
        // original
        // this.features$ = convertArrayAsObjectToArray(res.features) as Feature[];

        // example (it can be removed)
        this.features$ = FEATURES as Feature[];

        console.log('sidenav.features$: ', this.features$);
      }
    });
  }

  /** change opened menu */
  changeStep(value: number) {
    this.step = value;
  }

}
