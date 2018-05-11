import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { AppConfig } from './app.config';
import { Observable } from 'rxjs/Observable';
import { LoaderService } from './shared/loader';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
    private apiBase = AppConfig.flickrApiBase;
    private headers = new Headers();

    constructor(private http: Http, public loader: LoaderService, public notification: ToastrService) { }

    // for all GET operations
    get(module: string, parameter?: URLSearchParams): Promise<any> {
        return this.http
            .get(this.apiBase + module, { search: parameter, headers: this.headers })
            .toPromise()
            .then((res) => { return this.handleSuccess(res) })
            .catch((err) => { return this.handleError(err) });
    }

    // for successfull API response
    private handleSuccess(response: any): Promise<any> {
        const result = response['_body'];
        if (result && result.stat === 'ok') {
            this.notification.success('Images Fetched Succesfully!');
        } else if(result) {
            this.notification.error(result.message);
        }

        return Promise.resolve(result);
    }

    // for error handling
    public handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        this.loader.loader.emit(false);
        return Promise.reject(error.message || error);
    }
}
