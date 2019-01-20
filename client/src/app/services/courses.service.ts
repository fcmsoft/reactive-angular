import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, from, forkJoin } from 'rxjs';
import { flatMap, map, toArray } from 'rxjs/operators';

import { AuthService } from './auth.service';

import { Course } from '../models/course';
import { PersonDetail } from '../models/person-detail';
import { API_URL } from '../app.constants';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(`${API_URL}/courses`, {headers: this.authService.getHeader()});
  }

  getCourseTeacher(active: Boolean, id: String): Observable<PersonDetail | {}> {
    if (active) {
      return this.http.get<PersonDetail>(`${API_URL}/teachers/${id}`, {headers: this.authService.getHeader()});
    }
    return of({});
  }

  getCourseStudents(active: Boolean, students: String[]): Observable<PersonDetail[]> {
    if (active) {
      return from(students)
        .pipe(
          flatMap(
            id => this.http.get<PersonDetail>(`${API_URL}/students/${id}`, {headers: this.authService.getHeader()})
          ),
          toArray()
        );
    }
    return of([]);
  }

  get(id: String): Observable<Course> {
    const course = this.http.get<Course>(`${API_URL}/courses/${id}`, {headers: this.authService.getHeader()});

    return course
      .pipe(
        flatMap((courseData: Course) => {
          return forkJoin(
             of(courseData),
             this.getCourseTeacher(courseData.active, courseData.teacher),
             this.getCourseStudents(courseData.active, courseData.students)
          ).pipe(
            map((data: any[]) => {
              const courseDetails = data[0];
              courseDetails.teacherDetails = data[1];
              courseDetails.studentsDetails = data[2];
              return courseDetails;
            })
          );
        }));
    }

    search(term: string): Observable<Course[]> {
      return this.http.get<Course[]>(`${API_URL}/courses?query=${term}`, {headers: this.authService.getHeader()});
    }

}
