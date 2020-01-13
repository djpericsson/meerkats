import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {AfterViewInit, Inject, PLATFORM_ID} from '@angular/core';

declare const gtag: any;

@Component({
  selector: 'meerkat-recordings-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Meerkat Recordings';
  constructor(@Inject(PLATFORM_ID) private platformId: Object, public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        gtag('config', 'UA-156089383-1', {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }
}
