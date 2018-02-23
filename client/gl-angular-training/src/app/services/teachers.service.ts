import { Injectable } from '@angular/core';

import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Person } from '../models/person';
import { Teacher } from '../models/teacher';
import { Course } from '../models/course';
import { Profile } from 'selenium-webdriver/firefox';

@Injectable()
export class TeachersService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(): Observable<Person[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({'token': token});
    return this.http.get<Person[]>('http://localhost:3001/teachers', {headers: headers});
  }

  getTeacherCourses(teacherId: String): Observable<Array<Course>> {
    const arrayOfCourses = [];
    /*coursesIds.map(
      (courseId) => {
        arrayOfCourses.push(this.http.get<Course[]>('http://localhost:3001/courses/' + courseId, {headers: this.authService.getHeader()}));
          }
        );
    return Observable.merge(...arrayOfCourses);*/
    return Observable.of([]);
  }

  getTeacherProfile(profileId: String): Observable<Profile> {
    return this.http.get<Profile>('http://localhost:3001/profiles/' + profileId, {headers: this.authService.getHeader()});
  }

  get(id: String): Observable<Teacher> {
    const teacher = this.http.get<Teacher>('http://localhost:3001/teachers/' + id, {headers: this.authService.getHeader()});

    return teacher
        .flatMap((teacherData: Teacher) => {
          return Observable.forkJoin(
             Observable.of(teacherData),
             this.getTeacherCourses(id),
             this.getTeacherProfile(teacherData.profile_id)
          )
            .map((data: any[]) => {
              let teacherDetails = data[0];
              teacherDetails.courses = data[1];
              teacherDetails.profile = data[2];
              return teacherDetails;
            });
        });
  }
}
