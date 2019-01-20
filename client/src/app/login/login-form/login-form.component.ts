import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  error = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) { console.log('si');
      this.router.navigate(['/']);
    }
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
          console.log('login error', error);
          this.error = true;
        }
      );
  }

}
