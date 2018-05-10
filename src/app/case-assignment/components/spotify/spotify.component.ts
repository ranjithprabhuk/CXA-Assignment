import { Component, OnInit } from '@angular/core';
import { CaseAssignmentService } from '../../case-assignment.service';

@Component({
    templateUrl: 'spotify.component.html',
    styleUrls: ['spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
    public imageList: any[] = [];

    constructor(private _caseAssignmentService: CaseAssignmentService) { }

    // get the list of images to load
    public getImageList(): void {
        this._caseAssignmentService.getRecentImages().then((response) => {
            if (response && response.photos) {
                const { photo } = response.photos;
                this.imageList = photo && photo.length > 0 ? photo : [];
                console.log('photodd', this.imageList, photo)
            }
        })
    }

    // create the image url
    constructImageSource(image: any): String {
        const { id, server, farm, secret } = image;
        return `http://farm${farm}.static.flickr.com/${server}/${id}_${secret}_m.jpg'`;
    }

    ngOnInit() {
        this.getImageList();
    }

}
