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
  title;
  addButtonText;
  constructor(private dataService: PersonDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.url.subscribe(
      (url) => {
        this.path = url[0].path;
        this.title = this.path.charAt(0).toUpperCase() + this.path.slice(1);
        this.addButtonText = 'Add new ' + this.path.slice(0, -1);
        this.data = this.dataService.getAll(this.path);
      }
    );
  }
}
