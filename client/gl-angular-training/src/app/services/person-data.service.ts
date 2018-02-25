import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mergeMap';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Person } from '../models/person';
import { Profile } from '../models/profile';
import { Course } from '../models/course';
import { PersonDetail } from '../models/person-detail';

@Injectable()
export class PersonDataService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(path): Observable<Person[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({'token': token});
    return this.http.get<Person[]>('http://localhost:3001/' + path, {headers: headers});
  }

  getCourses(teacherId: String): Observable<Array<Course>> {
    const arrayOfCourses = [];
    /*coursesIds.map(
      (courseId) => {
        arrayOfCourses.push(this.http.get<Course[]>('http://localhost:3001/courses/' + courseId, {headers: this.authService.getHeader()}));
          }
        );
    return Observable.merge(...arrayOfCourses);*/
    return Observable.of([]);
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
             this.getCourses(id),
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
}
