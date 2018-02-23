import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeachersService } from '../../services/teachers.service';

@Component({
  selector: 'gl-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  teacher;
  constructor(private teacherServices: TeachersService, private route: ActivatedRoute  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.teacherServices.get(id).subscribe(
      (teacher) => { console.log(teacher);
        this.teacher = teacher;
      }
    );

  }

}
