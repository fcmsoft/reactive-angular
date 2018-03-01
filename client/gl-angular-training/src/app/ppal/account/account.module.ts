import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    AccountComponent
  ]
})
export class AccountModule { }
