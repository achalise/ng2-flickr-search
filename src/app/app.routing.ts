import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FlickrSearchComponent } from './flickr-search/flickr.search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'flickr', component: FlickrSearchComponent}
];

export const routing = RouterModule.forRoot(routes);
