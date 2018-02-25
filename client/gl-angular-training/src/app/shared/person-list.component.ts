import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonDataService } from '../services/person-data.service';

@Component({
  selector: 'gl-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
  data;
  path;
  constructor(private dataService: PersonDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.route.parent.url.subscribe(
      (url) => {
        this.path = url[0].path;
        this.data = this.dataService.getAll(this.path);

      }
    );
  }

}
