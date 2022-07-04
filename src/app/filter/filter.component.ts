import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  //router:Router;
  colors: string[] = ['red', 'green', 'blue'];
  constructor(
    public filterService: FilterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  select() {
    this.router.navigate(["/phones"], {
      queryParams: { deviceColor: this.filterService.deviceColor },
      fragment: this.filterService.isPremium ? "premium" : ""
    });
  }

}
