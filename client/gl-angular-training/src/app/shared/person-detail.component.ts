import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonDataService } from '../services/person-data.service';

@Component({
  selector: 'gl-person-detail',
  templateUrl: './person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {

  data;
  path;
  title;
  constructor(private personDataService: PersonDataService, private route: ActivatedRoute  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.route.parent.url.subscribe(
      (url) => {
        this.path = url[0].path;
        this.personDataService.get(id, this.path).subscribe(
          (data) => {
            this.data = data; console.log(this.data);
          }
        );
        this.title = this.path === 'students' ? 'Student Details' : 'Teacher Details';

      }
    );
  }
}
