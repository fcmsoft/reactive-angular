import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonDataService } from 'src/app/services/person-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonDetail } from 'src/app/models/person-detail';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  id: string;
  private sub: any;
  public detail$: Observable<PersonDetail>;

  constructor(private route: ActivatedRoute, private studentService: PersonDataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.detail$ = this.studentService.get(this.id, 'students');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
