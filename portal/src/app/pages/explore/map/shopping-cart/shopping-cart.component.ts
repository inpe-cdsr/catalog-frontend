import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ExploreState } from '../../explore.state';
import { Feature } from '../../sidenav/tile/tile.interface';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-map-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    public features: Feature[];

    constructor(
        public dialog: MatDialog,
        private store: Store<ExploreState>) {
        this.store.pipe(select('explore')).subscribe(res => {
            if(res.featuresToDownload) {
                this.features = res.featuresToDownload;
            }
        });
    }    

    ngOnInit(): void {
        this.features = [];
    }

    public openList() {
        this.dialog.open(ShoppingListComponent, {
            width: '845px',
            maxHeight: '85vh',
            restoreFocus: false,
            disableClose: false,
            data: {
                features: this.features
            }
        });
    }
  
}