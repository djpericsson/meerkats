import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IRelease } from '../model/irelease';
import { ReleaseService } from '../service/release.service';
import { Observable } from 'rxjs';
import { ArtistService } from '../service/artist.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { IArtist } from '../model/iartist';
import { GoogleAnalyticsService } from '../service/google-analytics.service';

import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

import { FilterService } from '../service/filter.service';

@Component({
  selector: 'meerkat-recordings-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {
  isLoading = true;

  filter: string;
  number;
  fxFlexAlignProp = 'space-between start';

  public releases: any[] = [];
  public artists: any[] = [];
  public filteredReleases: any[] = [];

  constructor(
    private releaseService: ReleaseService,
    private artistService: ArtistService,
    public googleAnalyticsService: GoogleAnalyticsService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      if (this.isLoading) {
        this.spinner.show();
      }
    }, 1000);
    this.getReleases();
    this.filteredReleases = this.releases;
    this.filterService.filter.subscribe((value: string) => {
      this.filter = value;

      const artists = this.releases.filter(
        artist => artist.artist.toLocaleLowerCase().indexOf(value) !== -1
      );
      const releases = this.releases.filter(
        release => release.name.toLocaleLowerCase().indexOf(value) !== -1
      );
      const dates = this.releases.filter(
        date => date.date.toLocaleLowerCase().indexOf(value) !== -1
      );

      this.filteredReleases = [];
      if (artists.length > 0) {
        if (this.filteredReleases.length === 0) {
          this.filteredReleases = artists;
        } else {
          artists.forEach(artist => {
            if (
              this.filteredReleases.findIndex(
                item => item.name === artist.name
              ) > -1
            ) {
              this.filteredReleases.concat(artist);
            }
          });
        }
      }
      if (releases.length > 0) {
        if (this.filteredReleases.length === 0) {
          this.filteredReleases = releases;
        } else {
          releases.forEach(release => {
            if (
              this.filteredReleases.findIndex(
                item => item.name === release.name
              ) > -1
            ) {
              this.filteredReleases.concat(release);
            }
          });
        }
      }
      if (dates.length > 0) {
        if (this.filteredReleases.length === 0) {
          this.filteredReleases = dates;
        } else {
          dates.forEach(date => {
            if (
              this.filteredReleases.findIndex(item => item.name === date.name) >
              -1
            ) {
              this.filteredReleases.concat(date);
            }
          });
        }
      }

      if (
        this.filteredReleases.length === 2 ||
        this.filteredReleases.length === 3
      ) {
        this.fxFlexAlignProp = 'start';
      } else {
        this.fxFlexAlignProp = 'space-between start';
      }
    });
  }

  async getReleases() {
    this.releaseService.getJSON().subscribe(data => {
      data.releases.forEach(release => {
        this.releases.push({
          name: release.name,
          artist: release.artist,
          date: release.date,
          img: release.img,
          id: release.id,
          url: release.url
        });
      });
      this.getArtists();
    });
  }

  async getArtists() {
    this.artistService.getJSON().subscribe(data => {
      data.artists.forEach(artist => {
        this.artists.push({
          name: artist.name,
          img: artist.img
        });
      });
      this.listArtist();
    });
  }

  listArtist() {
    this.releases.forEach(release => {
      this.artists.forEach(artist => {
        if (release.artist.includes(artist.name)) {
          release.artistImg = artist.img;
          return false;
        }
      });
      if (!release.artistImg) {
        release.artistImg = release.img;
      }
    });
    this.isLoading = false;
    this.spinner.hide();
  }

  onClick(url: string) {
    this.googleAnalyticsService.eventEmitter(
      url,
      'release',
      'image',
      'click',
      10
    );
    window.open(url);
  }

  openDialog(id: string): void {
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
        this.filteredReleases.length === 2 || this.filteredReleases.length === 3
          ? '3.4%'
          : ''
    };
    return styles;
  }
}
