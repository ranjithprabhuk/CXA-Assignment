import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// services
import { ApiService } from './app.service';
import { CsvService } from './shared/service/csv.service';

// Components
import { LayoutComponent } from './layouts';
import { LoaderComponent, LoaderService } from './shared/loader';
import { AppConfig } from './app.config';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(AppConfig.toastrConfig),
    ChartsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    LoaderComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, ApiService, LoaderService, CsvService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
