import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value.username, form.value.password)
      .subscribe(
        (logged) => {
          if (logged) {
            this.router.navigate(['/']);
          }
        },
        (error) => {
          console.log('loggin error', error);
          this.error = true;
        }
      );
  }
}
