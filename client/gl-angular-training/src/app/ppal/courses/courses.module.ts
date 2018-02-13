import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';


import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail.component';
import { CoursesRoutingModule } from './courses.routing.module';

@NgModule({
    declarations: [
        CoursesComponent,
        CourseDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        CoursesRoutingModule
    ],
    exports: [],
    providers: [],
})
export class CoursesModule {}
