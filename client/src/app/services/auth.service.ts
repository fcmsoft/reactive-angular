import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  token = '';

  constructor(private http: HttpClient) {}

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      if (!this.token) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser ? currentUser.token : '';
      }
      resolve(this.token !== '');
    });
  }

  login(username: string, password: string) {
    return this.http.post('http://localhost:3001/login', {
      username: username,
      password: password
    }).pipe(map(
      (response: {token: string}) => {
        this.token = response.token;
        localStorage.setItem('currentUser', JSON.stringify({ token: this.token, name: username }));
        return true;
      },
      (error) => {
        console.log(error);
        return false;
      }
    ));
  }

  logout() {
    this.token = '';
    localStorage.removeItem('currentUser');
  }

  getToken() {
    return this.token;
  }

  getHeader() {
    return new HttpHeaders({'token': this.getToken()});
  }
}
