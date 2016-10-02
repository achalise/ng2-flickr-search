import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FlickrSearchComponent } from './flickr-search/flickr.search.component';
import { FlickrSearchBoxComponent } from './flickr-search-box/flickr.search.box.component';
import { SearchResultsComponent } from './search-results/search.results.component.ts';
import { ItemDetailsComponent } from './item-details/item.details.component';
import { ApiService } from './shared';
import { FlickrService } from './shared/flickr.service';
import { routing } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    routing,
    NgbModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FlickrSearchComponent,
    FlickrSearchBoxComponent,
    SearchResultsComponent,
    ItemDetailsComponent
  ],
  providers: [
    ApiService, FlickrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
