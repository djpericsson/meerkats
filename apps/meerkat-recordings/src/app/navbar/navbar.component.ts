import { Component, OnInit } from '@angular/core';
import { FilterService } from '../service/filter.service';
// import { GoogleAnalyticsService } from '../service/google-analytics.service';

@Component({
  selector: 'meerkat-recordings-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private filterService: FilterService,
    // public googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit() {}

  updateFilter(event: any) {
    setTimeout(() => {
      this.filterService.filter.next(event.target.value)
    }, 750);
  }

  onClick(url: string) {
    // this.googleAnalyticsService.eventEmitter(
    //   url,
    //   'release',
    //   'button',
    //   'click',
    //   10
    // );
    window.open(url);
  }
}
