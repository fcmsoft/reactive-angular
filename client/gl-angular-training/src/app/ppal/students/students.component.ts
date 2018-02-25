import { Component, OnInit } from '@angular/core';
import { PersonDataService } from '../../services/person-data.service';

@Component({
  selector: 'gl-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = this.dataService.getAll('students');
  constructor(private dataService: PersonDataService) { }

  ngOnInit() {

  }

}
