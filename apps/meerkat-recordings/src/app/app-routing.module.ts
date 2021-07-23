import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { ReleaseComponent } from './release/release.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'releases', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'artists', component: ArtistComponent },
  { path: 'releases', component: ReleaseComponent },
  { path: 'nomads', component: NomadsComponent },
  { path: 'nomads/aimnbreak', component: AimnbreakComponent },
  { path: 'nomads/basstrolls', component: BasstrollsComponent },
  { path: 'nomads/dhangsha', component: DhangshaComponent },
  { path: 'nomads/donnamaya', component: DonnamayaComponent },
  { path: 'nomads/gavana', component: GavanaComponent },
  { path: 'nomads/hab', component: HabComponent },
  { path: 'nomads/joxaren', component: JoxarenComponent },
  { path: 'nomads/kinglman', component: KinglmanComponent },
  { path: 'nomads/nuphlo', component: NuphloComponent },
  { path: 'nomads/ombudsman', component: OmbudsmanComponent },
  { path: 'nomads/phoniandflore', component: PhoniandfloreComponent },
  { path: 'nomads/pufferfisk', component: PufferfiskComponent },
  { path: 'nomads/sagraselekta', component: SagraselektaComponent },
  { path: 'nomads/uzul', component: UzulComponent },
  { path: 'nomads/wdgw', component: WdgwComponent },
  { path: '**', redirectTo: 'releases' }
];

@NgModule({
  imports: [
    NgbModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules // or NoPreloading
    })
  ],
  exports: [
    RouterModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ]
})
export class AppRoutingModule {}
