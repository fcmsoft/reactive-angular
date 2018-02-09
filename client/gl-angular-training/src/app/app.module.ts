import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { PpalComponent } from './ppal/ppal.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { StudentsService } from './services/students.service';
import { TeachersService } from './services/teachers.service';
import { CoursesService } from './services/courses.service';

import { CoursesModule } from './courses/courses.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PpalComponent,
    HomeComponent,
    StudentsComponent,
    TeachersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CoursesModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    StudentsService,
    TeachersService,
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
