import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
} from '@angular/material';

import { SelectLangComponent } from './components/select-lang/select-lang.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DialogFeatureComponent } from './components/dialog-feature/dialog-feature.component';
import { DialogCollectionDownloadComponent } from './components/dialog-collection-download/dialog-collection-download.component';
import { FormFieldErrorComponent } from './components/form-field-input/form-field-error.component';

/**
 * Shared Module
 * used to export components, services and models common in this application
 */
@NgModule({
  declarations: [
    SelectLangComponent,
    FooterComponent,
    LoadingComponent,
    FormFieldErrorComponent,
    DialogFeatureComponent,
    DialogCollectionDownloadComponent
  ],
  exports: [
    SelectLangComponent,
    FooterComponent,
    FormFieldErrorComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
  ],
  entryComponents: [
    DialogFeatureComponent,
    DialogCollectionDownloadComponent
  ]
})
export class SharedModule { }
