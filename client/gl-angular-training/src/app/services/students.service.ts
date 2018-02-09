import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class StudentsService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({'token': token});
    return this.http.get('http://localhost:3001/students', {headers: headers});
  }
}
