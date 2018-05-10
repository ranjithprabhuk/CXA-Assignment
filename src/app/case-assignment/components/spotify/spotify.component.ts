import { Component, OnInit } from '@angular/core';
import { CaseAssignmentService } from '../../case-assignment.service';
import { CsvService } from '../../../shared/service/csv.service';

@Component({
    templateUrl: 'spotify.component.html',
    styleUrls: ['spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
    public imageList: any[] = [];
    public searchText: String = '';
    public imagePerApiCall: Number = 30;
    public pageNo: any = 1;

    constructor(
        private _caseAssignmentService: CaseAssignmentService,
        private _csvService: CsvService,
    ) { }

    // get the list of images to load
    public getImageList(): void {
        this._caseAssignmentService.getRecentImages(this.imagePerApiCall, this.pageNo).then((response) => {
            if (response && response.photos) {
                const { photo } = response.photos;
                this.imageList = photo && photo.length > 0 ? photo : [];
            }
        })
    }

    // create the image url
    constructImageSource(image: any): String {
        const { id, server, farm, secret } = image;
        let url: String = '';

        if (id && server && farm && secret) {
            url = `http://farm${farm}.static.flickr.com/${server}/${id}_${secret}_m.jpg'`;
        }
        return url
    }

    // on image container scroll call the api to get more images
    public onImageContainerScroll(): void {
        this._caseAssignmentService.getRecentImages(this.imagePerApiCall, ++this.pageNo).then((response) => {
            if (response && response.photos) {
                const { photo } = response.photos;
                const imageList = photo && photo.length > 0 ? photo : [];
                this.imageList.push(...imageList);
            }
        })
    }

    // export the json data as csv
    public exportToCsv(): void {
        this._csvService.download(this.imageList, 'imageData');
    }

    // search flickr images based on user input
    public searchImages(searchText: string): void {
        this.resetValues();
        this._caseAssignmentService.searchImages(this.imagePerApiCall, this.pageNo, searchText).then((response) => {
            if (response && response.photos) {
                const { photo } = response.photos;
                this.imageList = photo && photo.length > 0 ? photo : [];
            }
        })
    }

    // reset the values
    public resetValues(): void {
        this.pageNo = 0;
        this.imageList = [];
    }

    // on component initial loading
    ngOnInit() {
        this.getImageList();
    }

}
