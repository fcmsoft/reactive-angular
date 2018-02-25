import { Component, OnInit } from '@angular/core';

import { PersonDataService } from '../../services/person-data.service';

@Component({
  selector: 'gl-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers = this.teachersService.getAll('teachers');
  constructor(private teachersService: PersonDataService) { }

  ngOnInit() {
  }

}
