import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatExpansionModule,
  MatRadioModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTabsModule,
  MatBottomSheetModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatTableModule,
  MatBadgeModule,
  MatTooltipModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxPaginationModule } from 'ngx-pagination';

// store
import { StoreModule } from '@ngrx/store';

// reducer
import * as fromExplore from './explore.reducer';

// components
import { ExploreComponent } from './explore.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MapComponent } from './map/map.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './sidenav/search/search.component';
import { TileComponent } from './sidenav/tile/tile.component';
import { FeatureTablePaginationComponent } from './sidenav/tile/feature-table-pagination/feature-table-pagination.component';
import { ShoppingCartComponent } from './map/shopping-cart/shopping-cart.component';
import { AuthModule } from '../auth/auth.module';

/**
 * Explore Module
 * Module for managing components and service of map pages
 */
@NgModule({
  declarations: [
    ExploreComponent,
    ToolbarComponent,
    MapComponent,
    ShoppingCartComponent,
    SidenavComponent,
    SearchComponent,
    TileComponent,
    FeatureTablePaginationComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    AuthModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    HttpClientModule,
    MatExpansionModule,
    MatRadioModule,
    MatBottomSheetModule,
    MatInputModule,
    FormsModule,
    MatTooltipModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatSliderModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    Ng5SliderModule,
    MatCheckboxModule,
    NgxPaginationModule,
    ChartsModule,
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot()
  ]
})
export class ExploreModule { }
