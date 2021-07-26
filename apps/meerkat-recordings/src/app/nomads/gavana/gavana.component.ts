import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../../service/google-analytics.service';

@Component({
  selector: 'meerkat-recordings-gavana',
  templateUrl: './gavana.component.html',
  styleUrls: ['./gavana.component.css']
})
export class GavanaComponent implements OnInit {

  constructor(
    private router: Router,
    public googleAnalyticsService: GoogleAnalyticsService
    ) { }

    onClick(url: string) {
      this.googleAnalyticsService.eventEmitter(
        url,
        'nomads',
        'link',
        'click',
        10
      );
      window.open(url);
    }

  ngOnInit(): void {
  }

}
