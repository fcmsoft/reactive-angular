import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpalComponent } from './ppal.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  { path: '',
    component: PpalComponent,
    canActivate: [ AuthGuardService ],
    children: [
    { path: 'dashboard', loadChildren: './home/home.module#HomeModule' },
    { path: 'courses', loadChildren: './courses/courses.module#CoursesModule' },
    { path: 'students', loadChildren: './students/students.module#StudentsModule' },
    { path: 'teachers', loadChildren: './teachers/teachers.module#TeachersModule'  }
  ]}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuardService ]
})
export class PpalRoutingModule { }
