import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PpalComponent } from './ppal.component';
import { PpalRoutingModule } from './ppal.routing.module';
import { TeachersService } from '../services/teachers.service';
import { StudentsService } from '../services/students.service';
import { CoursesService } from '../services/courses.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PpalRoutingModule
  ],
  declarations: [
    PpalComponent
  ],
  providers: [
    StudentsService,
    TeachersService,
    CoursesService
  ]
})
export class PpalModule { }
