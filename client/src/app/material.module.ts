import { NgModule } from '@angular/core';
import { MatToolbarModule, MatInputModule, MatCardModule, MatIconModule,
  MatMenuModule, MatTableModule, MatAccordion, MatExpansionModule, MatBadgeModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,

    MatExpansionModule,
    MatTableModule],
  exports: [MatToolbarModule,

    MatInputModule, MatExpansionModule, MatBadgeModule, MatDialogModule,
    MatCardModule, MatIconModule, MatMenuModule,  MatTableModule],
})
export class MaterialModule { }
