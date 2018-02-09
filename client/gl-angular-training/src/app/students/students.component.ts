import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'gl-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = this.studentsService.getAll();
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {

  }

}
