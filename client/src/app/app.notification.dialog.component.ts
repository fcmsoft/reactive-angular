import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: 'app-notification-dialog.html',
})
export class AppNotificationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AppNotificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
}
