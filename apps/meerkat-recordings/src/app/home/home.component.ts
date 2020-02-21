import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../service/google-analytics.service';

@Component({
  selector: 'meerkat-recordings-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit() {}

  onClick(url: string) {
    this.googleAnalyticsService.eventEmitter(
      url,
      'release',
      'button',
      'click',
      10
    );
    window.open(url);
  }
}
