import { Component, OnInit } from '@angular/core';
import { IRelease } from '../model/irelease';
import { ReleaseService } from '../service/release.service';
import { Observable } from 'rxjs';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'meerkat-recordings-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {
  public artists: any[] = [];
  public releases: any[] = [];

  constructor(
    private releaseService: ReleaseService,
    private artistService: ArtistService
  ) {}

  ngOnInit() {
    this.getReleases();
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
  }

  onClick(url: string) {
    window.open(url);
  }
}
