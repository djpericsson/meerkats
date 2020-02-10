import { Component, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  email: string;
}

declare const gtag: Function;

@Component({
  selector: 'meerkat-recordings-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Meerkat Recordings';
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-156089383-1', {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }
}
