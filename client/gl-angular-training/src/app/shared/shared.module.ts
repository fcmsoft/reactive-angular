import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
    MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
    MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
    MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule } from '@angular/material';

import { CovalentCommonModule, CovalentLayoutModule, CovalentMediaModule, CovalentExpansionPanelModule,
    CovalentStepsModule, CovalentLoadingModule, CovalentDialogsModule, CovalentSearchModule, CovalentPagingModule,
    CovalentNotificationsModule, CovalentMenuModule, CovalentDataTableModule, CovalentMessageModule } from '@covalent/core';

import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { PersonDetailComponent } from './person-detail.component';
import { PersonListComponent } from './person-list.component';
import { PersonFormComponent } from './person-form.component';
import { ListComponent } from './list.component';

import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        PersonDetailComponent,
        PersonListComponent,
        ListComponent,
        PersonFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        /** Material Modules */
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
       // MatButtonToggleModule,
       // MatSlideToggleModule,
       // MatProgressSpinnerModule,
       // MatDialogModule,
       // MatSnackBarModule,
      //  MatToolbarModule,
       // MatTabsModule,
        MatSidenavModule,
        MatTooltipModule,
       // MatRippleModule,
       // MatRadioModule,
       // MatGridListModule,
     //   MatDatepickerModule,
      //  MatNativeDateModule,
      //  MatSliderModule,
      //  MatAutocompleteModule,
        /** Covalent Modules */
        CovalentCommonModule,
        CovalentLayoutModule,
        CovalentMediaModule,
       // CovalentExpansionPanelModule,
      //  CovalentStepsModule,
      //  CovalentDialogsModule,
      //  CovalentLoadingModule,
     //   CovalentSearchModule,
     //   CovalentPagingModule,
      //  CovalentNotificationsModule,
        CovalentDynamicFormsModule,
        CovalentMenuModule,
     //   CovalentDataTableModule,
     //   CovalentMessageModule,
     ],
    exports: [
        CommonModule,
        /** Material Modules */
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
       // MatButtonToggleModule,
       // MatSlideToggleModule,
       // MatProgressSpinnerModule,
       // MatDialogModule,
       // MatSnackBarModule,
      //  MatToolbarModule,
       // MatTabsModule,
        MatSidenavModule,
        MatTooltipModule,
       // MatRippleModule,
       // MatRadioModule,
       // MatGridListModule,
     //   MatDatepickerModule,
      //  MatNativeDateModule,
      //  MatSliderModule,
      //  MatAutocompleteModule,
        /** Covalent Modules */
        CovalentCommonModule,
        CovalentLayoutModule,
        CovalentMediaModule,
       // CovalentExpansionPanelModule,
      //  CovalentStepsModule,
      //  CovalentDialogsModule,
      //  CovalentLoadingModule,
     //   CovalentSearchModule,
     //   CovalentPagingModule,
      //  CovalentNotificationsModule,
        CovalentMenuModule,
     //   CovalentDataTableModule,
     //   CovalentMessageModule,
        ListComponent,
        HttpClientModule
    ],
    providers: [],
})
export class SharedModule {}
