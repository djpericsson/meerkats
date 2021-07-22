import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReleaseComponent } from './release/release.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';

import { GoogleAnalyticsService } from './service/google-analytics.service';
import { ModalComponent } from './modal/modal.component';
import { FilterService } from './service/filter.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NomadsComponent } from './nomads/nomads.component';
import { AimnbreakComponent } from './nomads/aimnbreak/aimnbreak.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    HomeComponent,
    NavbarComponent,
    ReleaseComponent,
    ModalComponent,
    NomadsComponent,
    AimnbreakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FlexLayoutModule,
    RouterModule,
    NgxSpinnerModule,
    MomentModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [HomeComponent, ArtistComponent, GoogleAnalyticsService, FilterService],
  entryComponents: [HomeComponent, ArtistComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
