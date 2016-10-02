import {
    Component,
    OnInit,
    ElementRef,
    EventEmitter,
    Output
} from '@angular/core';

import { Observable } from 'rxjs';

import { FlickrService } from '../shared/flickr.service';

@Component({
  selector: 'my-flickr-search-box',
  templateUrl: './flickr.search.box.component.html',
  styleUrls: ['./flickr.search.box.component.scss']
})

export class FlickrSearchBoxComponent implements OnInit {
  inprogress: boolean;
  loadingImage: string = '/img/favicon.ico';
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<String[]> = new EventEmitter<String[]>();


  constructor(private el: ElementRef, private flickrService: FlickrService) {
      console.log(el);
  }

  ngOnInit() {
    console.log('Flickr search box component initialised');
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => { return e.target.value; })
    .filter( (value: string) =>  value.length > 3)
    .do(() => {this.inprogress = true; this.loading.next(true); })
    .map((query: String) => this.flickrService.search(query))
    .switch()
    .subscribe((results: String[]) => {
        this.inprogress = false;
        this.loading.next(false);
        this.results.next(results);
    });
  }
}
