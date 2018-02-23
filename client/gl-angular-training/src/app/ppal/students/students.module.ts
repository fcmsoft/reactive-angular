import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students.routing.module';
import { StudentDetailComponent } from './student-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    StudentsRoutingModule
  ],
  declarations: [
    StudentsComponent,
    StudentDetailComponent
  ]
})
export class StudentsModule { }
