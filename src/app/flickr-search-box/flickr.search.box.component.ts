import {
    Component,
    OnInit,
    ElementRef,
    EventEmitter,
    Output
} from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'my-flickr-search-box',
  templateUrl: './flickr.search.box.component.html',
  styleUrls: ['./flickr.search.box.component.scss']
})
export class FlickrSearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Flickr search box component initialised');
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => { return e.target.value; })
    .filter( (value: string) =>  value.length > 3)
    .do(() => this.loading.next(true))
    .subscribe((value: any) => {
        console.log('Key entered.', value);
    });
  }

}
