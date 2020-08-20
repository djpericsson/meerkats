import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleAnalyticsService } from '../service/google-analytics.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'meerkat-recordings-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>()
  constructor(
    public googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

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
