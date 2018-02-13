import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { PpalComponent } from './ppal/ppal.component';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { StudentsService } from './services/students.service';
import { TeachersService } from './services/teachers.service';
import { CoursesService } from './services/courses.service';

import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { HomeModule } from './home/home.module';

import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PpalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SharedModule,
    HomeModule,
    RoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    StudentsService,
    TeachersService,
    CoursesService,
    StudentsModule,
    TeachersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
