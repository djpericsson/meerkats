import { Component, OnInit } from '@angular/core';
import { IRelease } from '../model/irelease';
import { ReleaseService } from '../service/release.service';
import { Observable } from 'rxjs';
import { ArtistService } from '../service/artist.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'meerkat-recordings-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {

  isLoading = true

  public artists: any[] = [];
  public releases: any[] = [];

  constructor(
    private releaseService: ReleaseService,
    private artistService: ArtistService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.showSpinner()
    this.getReleases();
  }

  showSpinner() {
    this.spinner.show();
  }

  async getReleases() {
    this.releaseService.getJSON().subscribe(data => {
      this.releases = data.releases;
      this.getArtists();
    });
  }

  async getArtists() {
    this.artistService.getJSON().subscribe(data => {
      this.artists = data.artists;
      this.listArtist();
    });
  }

  listArtist() {
    this.releases.forEach(release => {
      this.artists.forEach(artist => {
        if (release.artist === artist.name) {
          release.artistImg = artist.img;
          return false;
        };
      });
      if (!release.artistImg) {
        release.artistImg = release.img;
      }
    });
    this.isLoading = false
  }

  onClick(url: string) {
    window.open(url);
  }
}
