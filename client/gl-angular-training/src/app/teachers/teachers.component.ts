import { Component, OnInit } from '@angular/core';

import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'gl-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers = this.teachersService.getAll();
  constructor(private teachersService: TeachersService) { }

  ngOnInit() {
  }

}
