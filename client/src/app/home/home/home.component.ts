import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { PersonDataService } from 'src/app/services/person-data.service';
import { Course } from 'src/app/models/course';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';
import { count, map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses: Observable<Course[]>;
  cantCourses: Observable<number>;
  cantStudents: Observable<number>;
  cantTeachers: Observable<number>;
  courseWithMoreInscripts: Observable<any>;

  constructor(private coursesService: CoursesService, private personsService: PersonDataService) { }

  ngOnInit() {
    this.courses = this.coursesService.getAll().pipe(shareReplay());
    this.cantCourses = this.courses.pipe(
      map(res => res.length)
    );
    this.courseWithMoreInscripts = this.courses.pipe(
      map(res =>
          res.reduce(( maxCourse, curCourse ) => {
            const max = maxCourse.students ? maxCourse.students.length : 0;
            const cur = curCourse.students ? curCourse.students.length : 0;
            if (cur > max) {
              return curCourse;
            }
            return maxCourse;
          })
      ),
      map((res: Course) => {
        return {
          title: res.title,
          id: res.id
        };
      })
    );
    this.cantStudents = this.personsService.getAll('students').pipe(
      map(res => res.length)
    );
    this.cantTeachers = this.personsService.getAll('teachers').pipe(
      map(res => res.length)
    );
  }

}
