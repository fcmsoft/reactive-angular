import { Injectable } from '@angular/core';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CoursesService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({'token': token});
    return this.http.get('http://localhost:3001/courses', {headers: headers});
  }

  get(id: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({'token': token});
    return this.http.get('http://localhost:3001/courses/' + id, {headers: headers});
  }
}
