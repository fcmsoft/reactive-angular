import { Component, OnInit } from '@angular/core';
import { PersonDataService } from 'src/app/services/person-data.service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Observable<Person[]>;
  displayedColumns: string[] = ['nombre', 'email'];

  constructor(private dataService: PersonDataService) { }

  ngOnInit() {
    this.students = this.dataService.getAll('students');
  }

}
