import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursesService {

  constructor(private http: Http, private authService: AuthService) {}

  getAll(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new Headers({'token': token});
    return this.http.get('http://localhost:3001/courses', {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  get(id: number): Observable<any> {
    const token = this.authService.getToken();
    const headers = new Headers({'token': token});
    return this.http.get('http://localhost:3001/courses/' + id, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }
}
