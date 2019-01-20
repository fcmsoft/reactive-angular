import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';
import { PATH_STUDENTS } from '../app.constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  private sub: any;
  public results;

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.searchService.searchText = params['text'];
      this.results = this.searchService.search();
    });
  }

  getTextResult(item) {
    return item.title ? item.title : `${item.first_name} ${item.last_name}`;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
