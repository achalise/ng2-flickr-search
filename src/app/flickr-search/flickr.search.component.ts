import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-flickr-search',
  templateUrl: './flickr.search.component.html',
  styleUrls: ['./flickr.search.component.scss']
})
export class FlickrSearchComponent implements OnInit {
  loadingImage: string = '/img/favicon.ico';
  results: String[];
  constructor() {
    // Do stuff
  }
  ngOnInit() {
    console.log('Flickr search component initialised');
  }
  updateResults(results) {
    console.log('Updating results', results);
    this.results = results;
  }

}
