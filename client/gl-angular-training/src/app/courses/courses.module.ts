import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CoursesComponent } from './courses.component';

@NgModule({
    declarations: [
        CoursesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class CoursesModule {}
