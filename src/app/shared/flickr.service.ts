import { Injectable } from '@angular/core';

import { Jsonp, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';



@Injectable()
export class FlickrService {
    constructor(private jsonp: Jsonp) {}
    public search(query: String): Observable<any> {
        console.log('Searching for query', query);
        let apiUrl = `https://api.flickr.com/services/feeds/photos_public.gne`;

        let params = new URLSearchParams();
        params.set('jsoncallback', 'JSONP_CALLBACK');
        params.set('format', 'json');
        params.set('tags', '' + query);

        return this.jsonp.get(apiUrl, { search: params })
               .map(response => <any[]> response.json().items);
    }
}
