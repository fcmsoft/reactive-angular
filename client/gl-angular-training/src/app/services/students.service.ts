import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Person } from '../models/person';
import { Profile } from '../models/profile';
import { Student } from '../models/student';
import { Course } from '../models/course';

@Injectable()
export class StudentsService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(): Observable<Person[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({'token': token});
    return this.http.get<Person[]>('http://localhost:3001/students', {headers: headers});
  }

  getStudentCourses(teacherId: String): Observable<Array<Course>> {
    const arrayOfCourses = [];
    /*coursesIds.map(
      (courseId) => {
        arrayOfCourses.push(this.http.get<Course[]>('http://localhost:3001/courses/' + courseId, {headers: this.authService.getHeader()}));
          }
        );
    return Observable.merge(...arrayOfCourses);*/
    return Observable.of([]);
  }

  getStudentProfile(profileId: String): Observable<Profile> {
    return this.http.get<Profile>('http://localhost:3001/profiles/' + profileId, {headers: this.authService.getHeader()});
  }

  get(id: String): Observable<Student> {
    const student = this.http.get<Student>('http://localhost:3001/students/' + id, {headers: this.authService.getHeader()});

    return student
        .flatMap((studentData: Student) => {
          return Observable.forkJoin(
             Observable.of(studentData),
             this.getStudentCourses(id),
             this.getStudentProfile(studentData.profile_id)
          )
            .map((data: any[]) => {
              let studentDetails = data[0];
              studentDetails.courses = data[1];
              studentDetails.profile = data[2];
              return studentDetails;
            });
        });
  }
}
