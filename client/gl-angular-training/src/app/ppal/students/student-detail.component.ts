import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'gl-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student;
  constructor(private studentsServices: StudentsService, private route: ActivatedRoute  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.studentsServices.get(id).subscribe(
      (student) => {
        this.student = student;
      }
    );

  }

}
