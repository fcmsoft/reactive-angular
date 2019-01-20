import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { MaterialModule } from '../material.module';
import { CourseComponent } from './course/course.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoursesRoutingModule
  ],
  declarations: [CoursesComponent, CourseComponent]
})
export class CoursesModule { }
