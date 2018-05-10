import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { ApiService } from '../app.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CaseAssignmentService {
    protected apiEndPoint: String = '/assets/json/';

    constructor(private apiService: ApiService) { }

    // to get the list of recent images from the flickr api
    getRecentImages(parameter?: any): Promise<any> {
        // tslint:disable-next-line
        const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=b92a39ddacaa1916cd1bde54db89e17a&extras=media&per_page=500&page=2&format=json&nojsoncallback=1';
        return this.apiService.get(url)
            .then(res => { return Promise.resolve(JSON.parse(res))})
            .catch(err => { return Promise.reject(err)});
    }
}
