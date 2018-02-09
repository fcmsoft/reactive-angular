import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'gl-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = this.coursesService.getAll();
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

}
