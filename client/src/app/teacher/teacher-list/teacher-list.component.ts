import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';
import { PersonDataService } from 'src/app/services/person-data.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  teachers: Observable<Person[]>;
  displayedColumns: string[] = ['nombre', 'email'];

  constructor(private dataService: PersonDataService) { }

  ngOnInit() {
    this.teachers = this.dataService.getAll('teachers');
  }

}
