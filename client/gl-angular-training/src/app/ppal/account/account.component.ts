import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'gl-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  data;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.get().subscribe(
      (account) => {
        this.data = account;
      }
    );
  }

}
