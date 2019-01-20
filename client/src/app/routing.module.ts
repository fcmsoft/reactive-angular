import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [ AuthGuardService ]
  },
  { path: 'cursos',
    loadChildren: './courses/courses.module#CoursesModule',
    canActivate: [ AuthGuardService ]
  },
  { path: 'profesores',
    loadChildren: './teacher/teacher.module#TeacherModule',
    canActivate: [ AuthGuardService ]
  },
  { path: 'alumnos',
    loadChildren: './student/student.module#StudentModule',
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'search/:text',
    component: SearchComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class RoutingModule { }
