import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonDataService } from 'src/app/services/person-data.service';
import { Observable } from 'rxjs';
import { PersonDetail } from 'src/app/models/person-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent implements OnInit, OnDestroy {

  id: string;
  private sub: any;
  public detail$: Observable<PersonDetail>;

  constructor(private route: ActivatedRoute, private teacherService: PersonDataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.detail$ = this.teacherService.get(this.id, 'teachers');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
