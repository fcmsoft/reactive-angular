import { Injectable } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/from';


import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models/course';
import { PersonDetail } from '../models/person-detail';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(): Observable<Course[]> {

    return this.http.get<Course[]>('http://localhost:3001/courses', {headers: this.authService.getHeader()});
  }

  getCourseTeacher(active: Boolean, id: String): Observable<PersonDetail | {}> {
    if (active) {
      return this.http.get<PersonDetail>('http://localhost:3001/teachers/' + id, {headers: this.authService.getHeader()});
    }
    return Observable.of({});
  }

  getCourseStudents(active: Boolean, students: String[]): Observable<PersonDetail[]> {
    return Observable.from(students).flatMap(
        (id) => this.http.get<PersonDetail>('http://localhost:3001/students/' + id, {headers: this.authService.getHeader()})
    ).toArray();
  }

  get(id: String): Observable<Course> {
    const course = this.http.get<Course>('http://localhost:3001/courses/' + id, {headers: this.authService.getHeader()});

    return course
        .flatMap((courseData: Course) => {
          return Observable.forkJoin(
             Observable.of(courseData),
             this.getCourseTeacher(courseData.active, courseData.teacher),
             this.getCourseStudents(courseData.active, courseData.students)
          )
            .map((data: any[]) => {
              let courseDetails = data[0];
              courseDetails.teacherDetails = data[1];
              courseDetails.studentsDetails = data[2];

              return courseDetails;
            });
        });
    }
}
