import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: ':id', component: StudentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
