import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { TeachersComponent } from './teachers.component';
import { TeachersRoutingModule } from './teachers.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TeachersRoutingModule
  ],
  declarations: [
    TeachersComponent
  ]
})
export class TeachersModule { }
