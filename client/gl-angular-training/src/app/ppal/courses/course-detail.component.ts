import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'gl-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course;
  constructor(private coursesService: CoursesService, private route: ActivatedRoute  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.coursesService.get(id).subscribe(
      (course) => { console.log(course);
        this.course = course;
      }
    );

  }

}
