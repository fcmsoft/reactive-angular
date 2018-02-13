import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'gl-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courses = this.coursesService.getAll();
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

}
