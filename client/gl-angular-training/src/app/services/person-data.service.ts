import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Person } from '../models/person';
import { PersonToAdd } from '../models/person';
import { Profile } from '../models/profile';
import { Course } from '../models/course';
import { PersonDetail } from '../models/person-detail';
import { CoursesService } from './courses.service';

@Injectable()
export class PersonDataService {

  constructor(private http: HttpClient, private authService: AuthService, private coursesService: CoursesService) {}

  getAll(path): Observable<Person[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({'token': token});
    return this.http.get<Person[]>('http://localhost:3001/' + path, {headers: headers});
  }

  getCourses(id: String, path: String): Observable<Course[]> {
    return this.coursesService.getAll()
      .flatMap(courses => {
        return courses
          .filter(course => {
            if (path === 'students' &&
              course.active &&
              course.students!==undefined) {
                return course.students.find((student) => student === id);
            } else if (course.active && course.teacher!==undefined) {
              return course.teacher === id;
            }
            return false;
          });
      }).toArray();

  }

  getProfile(profileId: String): Observable<Profile> {
    return this.http.get<Profile>('http://localhost:3001/profiles/' + profileId, {headers: this.authService.getHeader()});
  }

  get(id: String, path: String): Observable<PersonDetail> {
    const person = this.http.get<PersonDetail>('http://localhost:3001/' + path + '/' + id, {headers: this.authService.getHeader()});

    return person
        .flatMap((personData: PersonDetail) => {
          return Observable.forkJoin(
             Observable.of(personData),
             this.getCourses(id, path),
             this.getProfile(personData.profile_id)
          )
            .map((data: any[]) => {
              let personDetails = data[0];
              personDetails.courses = data[1];
              personDetails.profile = data[2];
              return personDetails;
            });
        });
  }

  add(path: String, person: PersonToAdd) {
    return this.http.post<Person>('http://localhost:3001/' + path, person, {headers: this.authService.getHeader()});
  }
}
