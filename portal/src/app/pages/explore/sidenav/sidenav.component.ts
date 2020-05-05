// angular
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

// state management
import { ExploreState } from 'src/app/pages/explore/explore.state';

// interface
import { Feature } from 'src/app/pages/explore/sidenav/tile/tile.interface';

// other
import { convertArrayAsObjectToArray } from 'src/app/shared/helpers/common';
import { FormControl } from '@angular/forms';


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
  public selected = new FormControl(0);
  /** features selected by search */
  public features$: Feature[] = [];

  /** get infos by store application */
  constructor(private store: Store<ExploreState>) {
    this.store.pipe(select('explore')).subscribe(res => {
      if (res.features) {
        this.features$ = convertArrayAsObjectToArray(res.features) as Feature[];
      }
    });
  }

  /** change opened menu */
  changeStep(value: number) {
    this.selected.setValue(value);
  }

}
