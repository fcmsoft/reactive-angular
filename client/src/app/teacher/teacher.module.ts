import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { AppCommonModule } from '../common/app.common.module';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    AppCommonModule
  ],
  declarations: [TeacherListComponent, TeacherDetailComponent]
})
export class TeacherModule { }
