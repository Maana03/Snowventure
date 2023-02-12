
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {MatButtonModule} from '@angular/material/button';
// import { NavComponent } from './nav/nav.component';
// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { HomeComponent } from './home/home.component';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatCardModule } from '@angular/material/card';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatSnackBarModule } from '@angular/material/snack-bar';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavComponent,
//     HomeComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule,
//     MatButtonModule,
//     LayoutModule,
//     MatToolbarModule,
//     MatSidenavModule,
//     MatIconModule,
//     MatListModule,
//     MatGridListModule,
//     MatCardModule,
//     MatMenuModule,
//     MatSnackBarModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.log(err));

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckmarkButtonComponent } from 'src/components/landing-page/checkmark-button/checkmark-button.component';
import { IconButtonConfigurationStanComponent } from 'src/components/landing-page/icon-button-configuration-stan/icon-button-configuration-stan.component';
import { IconsSettings24pxComponent } from 'src/components/landing-page/icons-settings24px/icons-settings24px.component';
import { LandingPageComponent } from 'src/components/landing-page/landing-page.component';
import { TopAppBarConfigurationSmalComponent } from 'src/components/landing-page/top-app-bar-configuration-smal/top-app-bar-configuration-smal.component';
import { TopAppBarComponent } from 'src/components/landing-page/top-app-bar/top-app-bar.component';
import { WinterSportActivityButtonComponent } from 'src/components/landing-page/winter-sport-activity-button/winter-sport-activity-button.component';

@NgModule({
  declarations: [
    AppComponent,
    IconsSettings24pxComponent,
    IconButtonConfigurationStanComponent,
    TopAppBarConfigurationSmalComponent,
    TopAppBarComponent,
    WinterSportActivityButtonComponent,
    CheckmarkButtonComponent,
    LandingPageComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}