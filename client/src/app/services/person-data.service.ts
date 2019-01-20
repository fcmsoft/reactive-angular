import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { flatMap, map, toArray } from 'rxjs/operators';
import { Observable, forkJoin, of, from } from 'rxjs';

import { AuthService } from './auth.service';
import { Person, SearchPerson } from '../models/person';
import { PersonToAdd } from '../models/person';
import { Profile } from '../models/profile';
import { Course } from '../models/course';
import { PersonDetail } from '../models/person-detail';
import { CoursesService } from './courses.service';
import { API_URL } from '../app.constants';

@Injectable()
export class PersonDataService {

  constructor(private http: HttpClient, private authService: AuthService, private coursesService: CoursesService) {}

  getAll(path): Observable<Person[]> {
    return this.http.get<Person[]>(`${API_URL}/${path}`, {headers: this.authService.getHeader()});
  }

  getCourses(courses: Course[], path: string, personId: string): Observable<Course[]> {
    if (path === 'students') {
      return from(courses)
      .pipe(
        flatMap(
          id => this.http.get<Course>(`${API_URL}/courses/${id}`, {headers: this.authService.getHeader()})
        ),
        toArray()
      );
    } else {
      return this.http.get<Course[]>(`${API_URL}/courses/`, {headers: this.authService.getHeader()})
        .pipe(
            map((courseList: Course[]) => {
            return courseList.filter((course: any) => course.active && course.teacher === personId);
          })
        );
    }

  }

  getProfile(profileId: string): Observable<Profile> {
    return this.http.get<Profile>(`${API_URL}/profiles/${profileId}`, {headers: this.authService.getHeader()});
  }

  get(id: string, path: string): Observable<PersonDetail> {
    const person = this.http.get<PersonDetail>(`${API_URL}/${path}/${id}`, {headers: this.authService.getHeader()});

    return person.pipe(
      flatMap((personData: PersonDetail) => {
        return forkJoin(
           of(personData),
           this.getCourses(personData.courses, path, personData.id),
           this.getProfile(personData.profile_id)
        ).pipe(
          map((data: any[]) => {
            const personDetails = data[0];
            personDetails.courses = data[1];
            personDetails.profile = data[2];
            return personDetails;
          })
        );
      }));
  }

  search(term: string, path: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${API_URL}/${path}?query=${term}`, {headers: this.authService.getHeader()});
  }

  add(path: string, person: PersonToAdd) {
    return this.http.post<Person>(`${API_URL}/${path}`, person, {headers: this.authService.getHeader()});
  }
}
