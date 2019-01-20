import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list/person-list.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PersonListComponent, PersonDetailComponent],
  exports: [
    PersonListComponent, PersonDetailComponent
  ]
})
export class AppCommonModule { }
