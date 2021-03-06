import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { HttpClientModule } from '@angular/common/http';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    PdfJsViewerModule,
    HttpClientModule,
    NgxPageScrollModule

  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
