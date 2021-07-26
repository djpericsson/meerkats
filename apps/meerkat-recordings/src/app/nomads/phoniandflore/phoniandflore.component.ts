import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../../service/google-analytics.service';

@Component({
  selector: 'meerkat-recordings-phoniandflore',
  templateUrl: './phoniandflore.component.html',
  styleUrls: ['./phoniandflore.component.css']
})
export class PhoniandfloreComponent implements OnInit {

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
