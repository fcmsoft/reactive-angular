import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  token = '';

  constructor(private http: Http) {}

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
    }).map(
      (response: Response) => { console.log(response.json());
        this.token = response.json().token;
        localStorage.setItem('currentUser', JSON.stringify({ token: this.token, name: username }));
        return true;
      },
      (error) => {
        console.log(error);
        return false;
      }
    );
  }

  logout() {
    this.token = '';
    localStorage.removeItem('currentUser');
  }

  getToken() {
    return this.token;
  }
}
