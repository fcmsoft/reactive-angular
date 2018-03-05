import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonDetailComponent } from '../../shared/person-detail.component';
import { PersonListComponent } from '../../shared/person-list.component';
import { PersonFormComponent } from '../../shared/person-form.component';

const routes: Routes = [
  { path: '', component: PersonListComponent },
  { path: 'add', component: PersonFormComponent },
  { path: ':id', component: PersonDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
