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

@Component({
  selector: 'meerkat-recordings-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  isLoading = true;

  public artists$: Observable<IArtist>;
  public releases$: Observable<IRelease>;

  constructor(
    private artistService: ArtistService,
    private releaseService: ReleaseService,
    public googleAnalyticsService: GoogleAnalyticsService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    setTimeout(() => {
      if (this.isLoading) {
        this.spinner.show();
      }
    }, 1000);
    this.getArtists();
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
      this.artists$ = data.artists;
      this.getReleases();
    });
  }

  async getReleases() {
    this.releaseService.getJSON().subscribe(data => {
      this.releases$ = data.releases;
      this.listReleases();
    });
  }

  listReleases() {
    this.artists$.forEach(artist => {
      const rel: IRelease[] = [];
      const features: IRelease[] = [];
      this.releases$.forEach(release => {
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
    const dialogRef = this.dialog.open(ModalComponent, {
      width: 'auto',
      data: { id: id}
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }
}
