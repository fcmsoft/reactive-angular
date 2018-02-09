import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'gl-ppal',
  templateUrl: './ppal.component.html',
  styleUrls: ['./ppal.component.css']
})
export class PpalComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // no deberia irse solo?
  }

}
