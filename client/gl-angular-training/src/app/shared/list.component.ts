import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gl-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @Input() list: any;
  @Input() path: String;

  constructor() { }

  ngOnInit() {
  }

}
