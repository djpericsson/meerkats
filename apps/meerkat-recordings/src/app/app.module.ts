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
import { BasstrollsComponent } from './nomads/basstrolls/basstrolls.component';
import { DhangshaComponent } from './nomads/dhangsha/dhangsha.component';
import { DonnamayaComponent } from './nomads/donnamaya/donnamaya.component';
import { GavanaComponent } from './nomads/gavana/gavana.component';
import { HabComponent } from './nomads/hab/hab.component';
import { JoxarenComponent } from './nomads/joxaren/joxaren.component';
import { KinglmanComponent } from './nomads/kinglman/kinglman.component';
import { NuphloComponent } from './nomads/nuphlo/nuphlo.component';
import { OmbudsmanComponent } from './nomads/ombudsman/ombudsman.component';
import { PhoniandfloreComponent } from './nomads/phoniandflore/phoniandflore.component';
import { PufferfiskComponent } from './nomads/pufferfisk/pufferfisk.component';
import { SagraselektaComponent } from './nomads/sagraselekta/sagraselekta.component';
import { UzulComponent } from './nomads/uzul/uzul.component';
import { WdgwComponent } from './nomads/wdgw/wdgw.component';

@NgModule({
    declarations: [
        AppComponent,
        ArtistComponent,
        HomeComponent,
        NavbarComponent,
        ReleaseComponent,
        ModalComponent,
        NomadsComponent,
        AimnbreakComponent,
        BasstrollsComponent,
        DhangshaComponent,
        DonnamayaComponent,
        GavanaComponent,
        HabComponent,
        JoxarenComponent,
        KinglmanComponent,
        NuphloComponent,
        OmbudsmanComponent,
        PhoniandfloreComponent,
        PufferfiskComponent,
        SagraselektaComponent,
        UzulComponent,
        WdgwComponent
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
    bootstrap: [AppComponent]
})
export class AppModule {}
