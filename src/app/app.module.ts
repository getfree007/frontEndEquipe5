import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbNavModule, NgbAccordionModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutsModule,
    AppRoutingModule,
    CarouselModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbTooltipModule,
    ScrollToModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [ ],
})
export class AppModule {
}
