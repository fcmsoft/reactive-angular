import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { AppCommonModule } from '../common/app.common.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    AppCommonModule
  ],
  declarations: [StudentListComponent, StudentDetailComponent]
})
export class StudentModule { }
