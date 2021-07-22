import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { GoogleAnalyticsService } from '../service/google-analytics.service';
import { FilterService } from '../service/filter.service';
import { NomadsService } from '../service/nomads.service';

import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'meerkat-recordings-nomads',
  templateUrl: './nomads.component.html',
  styleUrls: ['./nomads.component.css']
})
export class NomadsComponent implements OnInit {
  isLoading = true;
  unsubscribe$ = new Subject<void>()

  filter: string;
  fxFlexAlignProp = 'space-between stretch';

  public releases: any[] = [];
  public artists: any[] = [];
  public filteredArtists: any[] = [];

  constructor(
    private nomadsService: NomadsService,
    public googleAnalyticsService: GoogleAnalyticsService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private filterService: FilterService) { }
  

  ngOnInit() {
    setTimeout(() => {
      if (this.isLoading) {
        this.spinner.show();
      }
    }, 1000);
    this.getArtists();
    this.filteredArtists = this.artists;
    this.filterService.filter.subscribe((value: string) => {
      this.filter = value;
      const artistFilter = this.artists.filter(
        artist => artist.name.toLocaleLowerCase().indexOf(value) !== -1
      );
      this.filteredArtists = artistFilter;
      if (
        this.filteredArtists.length === 2 ||
        this.filteredArtists.length === 3
      ) {
        this.fxFlexAlignProp = 'start';
      } else {
        this.fxFlexAlignProp = 'space-between stretch';
      }
    });
    this.isLoading = false;
    this.spinner.hide();
  }

  ngOnDestroy() {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  onClick(url: string) {
    this.googleAnalyticsService.eventEmitter(
      url,
      'artist',
      'image',
      'click',
      10
    );
    window.open(url, "_self");
  }

  async getArtists() {
    this.nomadsService.getJSON().subscribe(data => {
      data.artists.forEach(artist => {
        this.artists.push({
          name: artist.name,
          description: artist.description,
          img: artist.img,
          url: artist.url,
          releases: artist.releases,
          features: artist.features
        });
      });
    });
  }

  openDialog(id: string): void {
    this.googleAnalyticsService.eventEmitter(
      id,
      'release',
      'button',
      'click',
      10
    );
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }

  setStyle() {
    const styles = {
      'margin-right':
        this.filteredArtists.length === 2 || this.filteredArtists.length === 3
          ? '3.4%'
          : ''
    };
    return styles;
  }

}
