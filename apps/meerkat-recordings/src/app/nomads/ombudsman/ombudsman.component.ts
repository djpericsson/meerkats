import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../../service/google-analytics.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'meerkat-recordings-ombudsman',
  templateUrl: './ombudsman.component.html',
  styleUrls: ['./ombudsman.component.css']
})
export class OmbudsmanComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>()

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
    
    ngOnDestroy() {
      this.unsubscribe$.next()
      this.unsubscribe$.complete()
    }

  ngOnInit(): void {
  }

}
