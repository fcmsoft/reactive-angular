import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeachersComponent } from './teachers.component';
import { PersonDetailComponent } from '../../shared/person-detail.component';

const routes: Routes = [
  { path: '', component: TeachersComponent },
  { path: ':id', component: PersonDetailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
