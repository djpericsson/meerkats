import { Component, OnInit } from '@angular/core';
import { IArtist } from '../model/iartist';
import { ArtistService } from '../service/artist.service';
import { ReleaseService } from '../service/release.service';
import { Observable } from 'rxjs';
import { IRelease } from '../model/irelease';
import { NgxSpinnerService } from 'ngx-spinner';
import { GoogleAnalyticsService } from '../service/google-analytics.service';

import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

import { FilterService } from '../service/filter.service';

@Component({
  selector: 'meerkat-recordings-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  isLoading = true;

  filter: string;
  fxFlexAlignProp = 'space-between stretch';

  public releases: any[] = [];
  public artists: any[] = [];
  public filteredArtists: any[] = [];

  constructor(
    private artistService: ArtistService,
    private releaseService: ReleaseService,
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
  }

  onClick(url: string) {
    this.googleAnalyticsService.eventEmitter(
      url,
      'artist',
      'image',
      'click',
      10
    );
    window.open(url);
  }

  async getArtists() {
    this.artistService.getJSON().subscribe(data => {
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
      this.getReleases();
    });
  }

  async getReleases() {
    this.releaseService.getJSON().subscribe(data => {
      data.releases.forEach(release => {
        this.releases.push({
          name: release.name,
          artist: release.artist,
          img: release.img,
          songs: release.songs,
          id: release.id
        });
      });
      this.listReleases();
    });
  }

  listReleases() {
    this.artists.forEach(artist => {
      const rel: IRelease[] = [];
      const features: IRelease[] = [];
      this.releases.forEach(release => {
        if (release.artist.includes(artist.name)) {
          if (!rel.includes(release)) {
            rel.push(release);
          }
        }
        release.songs.forEach(song => {
          if (song.artist.includes(artist.name)) {
            if (!features.includes(release) && !rel.includes(release)) {
              features.push(release);
            }
          } else {
          }
        });
      });
      if (rel.length > 0) {
        artist.releases = rel;
      }
      if (features.length > 0) {
        artist.features = features;
      }
    });
    this.isLoading = false;
    this.spinner.hide();
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
