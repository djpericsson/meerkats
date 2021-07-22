import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'meerkat-recordings-aimnbreak',
  templateUrl: './aimnbreak.component.html',
  styleUrls: ['./aimnbreak.component.css']
})
export class AimnbreakComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
         document.body.scrollTop = 0;
      }
   });
}

}
