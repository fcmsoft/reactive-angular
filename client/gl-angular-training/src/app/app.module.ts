import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


import { PpalComponent } from './ppal/ppal.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { StudentsService } from './students.service';
import { TeachersService } from './teachers.service';
import { CoursesService } from './courses.service';

import { RoutingModule } from './routing.module';

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
    RoutingModule,
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
