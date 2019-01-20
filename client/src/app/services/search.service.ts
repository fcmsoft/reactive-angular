import { Injectable } from '@angular/core';
import { PersonDataService } from './person-data.service';
import { CoursesService } from './courses.service';
import { forkJoin } from 'rxjs';
import { PATH_TEACHER, PATH_COURSE, PATH_STUDENT } from '../app.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchText = '';

  constructor(private personService: PersonDataService, private coursesService: CoursesService) { }

  search() {
    const _studentsResults = this.personService.search(this.searchText, 'students').pipe(
      map(results => {
        return results.map(res => {
          return {...res, path: PATH_STUDENT};
        });
      })
    );
    const _teachersResults = this.personService.search(this.searchText, 'teachers').pipe(
      map(results => {
        return results.map(res => {
          return {...res, path: PATH_TEACHER};
        });
      })
    );
    const _coursesResults = this.coursesService.search(this.searchText).pipe(
      map(results => {
        return results.map(res => {
          return {...res, path: PATH_COURSE};
        });
      })
    );

    return forkJoin(
      _studentsResults,
      _teachersResults,
      _coursesResults
    ).pipe(
      map(data => {
        return [
          { title: 'Estudiantes', list: data[0]},
          { title: 'Profesor', list: data[1]},
          { title: 'Cursos', list: data[2]}
        ];
      })
    );
  }
}
