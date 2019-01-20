import { Component} from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router} from '@angular/router';
import { SearchService } from './services/search.service';
import { AlertsService } from './services/alerts.service';
import {MatDialog} from '@angular/material';
import { AppNotificationDialogComponent } from './app.notification.dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Courses';
  public value = this.searchService.searchText;

  constructor(
    private authService: AuthService,
    private alertsService: AlertsService,
    private router: Router,
    private searchService: SearchService,
    public dialog: MatDialog) { }

  get contador() {
    return this.alertsService.contador;
  }

  get notifications() {
    return this.alertsService.alertas;
  }

  read(alert) {
    this.alertsService.readAlert(alert);
    const dialogRef = this.dialog.open(AppNotificationDialogComponent, {
      data: {alert: alert}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  get isLogged() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  goToSearch() {
    this.router.navigate(['/search', this.value]);
  }
}
