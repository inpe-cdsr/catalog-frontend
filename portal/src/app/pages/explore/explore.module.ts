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

import {MatTreeModule} from '@angular/material/tree';

import { ChartsModule } from 'ng2-charts';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';

// components
import { ExploreComponent } from './explore.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MapComponent } from './map/map.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './sidenav/search/search.component';
import { TileComponent } from './sidenav/tile/tile.component';
import { FeatureTablePaginationComponent } from './sidenav/tile/feature-table-pagination/feature-table-pagination.component';
import { ShoppingCartComponent } from './toolbar/shopping-cart/shopping-cart.component';
import { ShoppingListComponent } from './toolbar/shopping-cart/shopping-list/shopping-list.component';
import { AuthModule } from '../auth/auth.module';
import { DatasetComponent } from './sidenav/dataset/dataset.component';

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
    ShoppingListComponent,
    SidenavComponent,
    SearchComponent,
    TileComponent,
    FeatureTablePaginationComponent,
    DatasetComponent
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
    MatTreeModule,
    Ng5SliderModule,
    MatCheckboxModule,
    NgxPaginationModule,
    ChartsModule,
    TranslateModule,
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot()
  ],
  entryComponents: [
    ShoppingListComponent
  ]
})
export class ExploreModule { }
