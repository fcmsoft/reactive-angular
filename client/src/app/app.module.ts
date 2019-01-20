import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { RoutingModule } from './routing.module';

import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { CoursesService } from './services/courses.service';
import { PersonDataService } from './services/person-data.service';
import { TeacherModule } from './teacher/teacher.module';
import { AccountComponent } from './account/account.component';
import { AccountService } from './services/account.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.service';
import { AlertsService } from './services/alerts.service';
import { AppNotificationDialogComponent } from './app.notification.dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    SearchComponent,
    AppNotificationDialogComponent
  ],
  entryComponents: [AppNotificationDialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    TeacherModule,
    FormsModule
  ],
  providers: [
    AuthService, AuthGuardService, CoursesService, PersonDataService, AccountService, SearchService, AlertsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
