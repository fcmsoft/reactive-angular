import { Component, OnInit, Input } from '@angular/core';
import { PersonDetail } from 'src/app/models/person-detail';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  @Input() detail: Observable<PersonDetail>;
  displayedColumns: string[] = ['title'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCourse(id: string) {
    this.router.navigate(['/cursos/detail', id]);
  }
}
