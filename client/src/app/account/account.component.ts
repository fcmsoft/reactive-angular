import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public data: Observable<Account>;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.data = this.accountService.get();
  }

}
