import { Component, OnInit } from '@angular/core';
import { IArtist } from '../model/iartist';
import { ArtistService } from '../service/artist.service';
import { ReleaseService } from '../service/release.service';
import { Observable } from 'rxjs';
import { IRelease } from '../model/irelease';

@Component({
  selector: 'meerkat-recordings-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public artists: any[] = [];
  public releases: any[] = [];

  constructor(
    private artistService: ArtistService,
    private releaseService: ReleaseService
  ) {}

  ngOnInit() {
    this.getArtists();
  }

  onClick(url: string) {
    window.open(url);
  }

  async getArtists() {
    this.artistService.getJSON().subscribe(data => {
      this.artists = data.artists;
      this.getReleases();
    });
  }

  async getReleases() {
    this.releaseService.getJSON().subscribe(data => {
      this.releases = data.releases;
      this.listReleases()
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
        };
        release.songs.forEach(song => {
          if (song.artist.includes(artist.name)) {
            if (!features.includes(release) && !rel.includes(release)) {
              features.push(release);
            }
          };
        });
      });
      if (rel.length > 0) {
        artist.releases = rel;
      };
      if (features.length > 0) {
        artist.features = features;
      };
    });
  }

  over(name: object): void {
    console.log(name);
    // const artistReleases: any[] = [];
    // this.releases.forEach(release => {
    //   if (release.artist === name) {
    //     artistReleases.push(release.name);
    //   }
    // });
    // console.log(artistReleases);
  }
}
