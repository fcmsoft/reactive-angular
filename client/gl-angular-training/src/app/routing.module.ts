import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PpalComponent } from './ppal/ppal.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: PpalComponent, canActivate: [AuthGuardService], children: [
    { path: '', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/:id', component: CourseDetailComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'teachers', component: TeachersComponent }
  ]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
