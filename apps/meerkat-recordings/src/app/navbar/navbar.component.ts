import { Component, OnInit } from '@angular/core';
import { FilterService } from '../service/filter.service';

@Component({
  selector: 'meerkat-recordings-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private filterService: FilterService
  ) {}

  ngOnInit() {}

  updateFilter(event: any) {
    setTimeout(() => {
      this.filterService.filter.next(event.target.value)
    }, 750);
  }
}
