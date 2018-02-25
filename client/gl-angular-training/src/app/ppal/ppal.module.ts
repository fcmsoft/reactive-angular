import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PpalComponent } from './ppal.component';

import { PpalRoutingModule } from './ppal.routing.module';
import { CoursesService } from '../services/courses.service';
import { PersonDataService } from '../services/person-data.service';

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
    CoursesService,
    PersonDataService
  ]
})
export class PpalModule { }
