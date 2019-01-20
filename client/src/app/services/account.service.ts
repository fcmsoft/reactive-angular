import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import { Account } from '../models/account';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  get(): Observable<Account> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({'token': token});
    return this.http.get<Account>('http://localhost:3001/account', {headers: headers});
  }
}
