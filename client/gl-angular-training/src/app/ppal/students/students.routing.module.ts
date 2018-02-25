import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';
import { PersonDetailComponent } from '../../shared/person-detail.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: ':id', component: PersonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
