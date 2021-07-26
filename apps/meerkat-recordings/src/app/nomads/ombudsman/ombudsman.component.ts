import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../../service/google-analytics.service';

@Component({
  selector: 'meerkat-recordings-ombudsman',
  templateUrl: './ombudsman.component.html',
  styleUrls: ['./ombudsman.component.css']
})
export class OmbudsmanComponent implements OnInit {

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
