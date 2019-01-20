import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  @Input() list: Observable<Person[]>;
  @Input() title: string;
  @Input() link: string;
  displayedColumns: string[] = ['nombre', 'email'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail(id: string) {

    this.router.navigate([this.link, id]);
  }

}
