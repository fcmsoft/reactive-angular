import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PpalComponent } from './ppal/ppal.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: '', component: PpalComponent, canActivate: [AuthGuardService], children: [
    { path: 'dashboard', loadChildren: './home/home.module#HomeModule' },
    { path: 'courses', loadChildren: './courses/courses.module#CoursesModule' },
    { path: 'students', loadChildren: './students/students.module#StudentsModule' },
    { path: 'teachers', loadChildren: './teachers/teachers.module#TeachersModule'  }
  ]},
  { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
