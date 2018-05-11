import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { ApiService } from '../app.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CaseAssignmentService {
    protected apiEndPoint: String = '/assets/json/';

    constructor(private apiService: ApiService) { }

    // to get the list of recent images from the flickr api
    getRecentImages(per_page: Number, page: Number): Promise<any> {
        const url = `&per_page=${per_page}&page=${page}`;
        return this.apiService.get(url)
            .then(res => { return Promise.resolve(JSON.parse(res))})
            .catch(err => { return Promise.reject(err)});
    }

    // to get the list of images which matches the user list
    searchImages(per_page: Number, page: Number, searchText: String): Promise<any> {
        // tslint:disable-next-line
        const url = `&text=${searchText}&per_page=${per_page}&page=${page}`;
        return this.apiService.get(url)
            .then(res => { return Promise.resolve(JSON.parse(res))})
            .catch(err => { return Promise.reject(err)});
    }
}
