import { Component, OnInit } from '@angular/core';
import { CaseAssignmentService } from '../../case-assignment.service';

@Component({
    templateUrl: 'spotify.component.html',
    styleUrls: ['spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
    public imageList: any[] = [];
    public imagePerApiCall: Number = 30;
    public pageNo: any = 1;

    constructor(private _caseAssignmentService: CaseAssignmentService) { }

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

    ngOnInit() {
        this.getImageList();
    }

}
