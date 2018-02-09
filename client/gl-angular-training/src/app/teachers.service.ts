import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeachersService {

  constructor(private http: Http, private authService: AuthService) {}

  getAll(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new Headers({'token': token});
    return this.http.get('http://localhost:3001/teachers', {headers: headers})
      .map(
        (response: Response) => {
          console.log(response.json());
          return response.json();
        }
      );
  }
}
