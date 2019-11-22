import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreModule } from './pages/explore/explore.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './pages/auth/auth.reducer';
import * as fromExplore from './pages/explore/explore.reducer';

// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

/**
 * Initial Module of Application (SPA)
 */
@NgModule({
  providers: [{provide: APP_BASE_HREF, useValue: '/catalogo/'}],
  declarations: [
    AppComponent,
  ],
  exports: [
    TranslateModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ExploreModule,
    StoreModule.forRoot({
      auth: fromAuth.reducer,
      explore: fromExplore.reducer
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/catalogo/assets/i18n/', '.json');
} 