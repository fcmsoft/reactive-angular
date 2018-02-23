import { Injectable } from '@angular/core';

import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Person } from '../models/person';

@Injectable()
export class TeachersService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(): Observable<Person[]> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({'token': token});
    return this.http.get<Person[]>('http://localhost:3001/teachers', {headers: headers});
  }
}
