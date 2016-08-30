import { Component, OnInit } from '@angular/core';
import { FlickrSearchBoxComponent } from '../flickr-search-box/flickr.search.box.component';

@Component({
  selector: 'my-flickr-search',
  templateUrl: './flickr.search.component.html',
  styleUrls: ['./flickr.search.component.scss'],
  directives: [FlickrSearchBoxComponent]
})
export class FlickrSearchComponent implements OnInit {
  loadingImage: string = '/img/favicon.ico';
  constructor() {
    // Do stuff
  }
  ngOnInit() {
    console.log('Flickr search component initialised');
  }

}
