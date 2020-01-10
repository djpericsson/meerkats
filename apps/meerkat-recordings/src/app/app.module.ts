import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReleaseComponent } from './release/release.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [AppComponent, ArtistComponent, HomeComponent, NavbarComponent, ReleaseComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule, FlexLayoutModule, RouterModule, NgxSpinnerModule, MomentModule],
  providers: [HomeComponent, ArtistComponent],
  entryComponents: [HomeComponent, ArtistComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
