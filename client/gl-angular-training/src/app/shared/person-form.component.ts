import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType, TdDynamicFormsComponent } from '@covalent/dynamic-forms';
import { PersonDataService } from '../services/person-data.service';

@Component({
  selector: 'gl-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @ViewChild('myForm')
  myForm: TdDynamicFormsComponent

  data;
  path;
  title;
  formFields;
  constructor(private personDataService: PersonDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.parent.url.subscribe(
      (url) => {
        this.path = url[0].path;
        this.title = 'Add a new ' + this.path.slice(0, -1);
      }
    );

    this.formFields = [
      {
        "name": "first_name",
        "label": "First name",
        "type": "text",
        "required": true,
      },
      {
        "name": "last_name",
        "label": "Last name",
        "type": "text",
        "required": true,
      },
      {
        "name": "email",
        "label": "Email",
        "type": "text",
        "required": true
      }
    ];
  }

  savePerson() {
    this.personDataService.add(this.path, {
      'first_name': this.myForm.controls.first_name.value,
      'last_name': this.myForm.controls.last_name.value,
      'email': this.myForm.controls.email.value
    }).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/' + this.path]);
      },
      (error) => { console.log(error); }
    )
  }
}
