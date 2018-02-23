import { Injectable } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/mergeMap';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';

import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models/course';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(): Observable<Course[]> {

    return this.http.get<Course[]>('http://localhost:3001/courses', {headers: this.authService.getHeader()});
  }

  getCourseTeacher(active: Boolean, id: String): Observable<Teacher | {}> {
    if (active) {
      return this.http.get<Teacher>('http://localhost:3001/teachers/' + id, {headers: this.authService.getHeader()});
    }
    //return myEmpty;
    return Observable.of({});
  }

  getCourseStudents(active: Boolean, students: String[]): any {
    if (active) {
      const arrayOfStudents = [];
      if (students) {
        students.map(
          (studentId) => {
            arrayOfStudents.push(this.http.get<Student[]>('http://localhost:3001/students/' + studentId, {headers: this.authService.getHeader()}));
          }
        );
      }
    return Observable.merge(...arrayOfStudents);
    }
    return Observable.of([]);

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
            .map((data: any[]) => { console.log(data[2]);
              let courseDetails = data[0];
              courseDetails.teacherDetails = data[1];
              courseDetails.studentsDetails = data[2];
              return courseDetails;
            });
        });
    }
}
