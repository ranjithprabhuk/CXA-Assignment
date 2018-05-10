import { Component, OnInit } from '@angular/core';
import { CaseAssignmentService } from '../../case-assignment.service';

@Component({
    templateUrl: 'spotify.component.html',
    styleUrls : ['spotify.component.scss'],
})
export class SpotifyComponent {

    constructor(private _caseAssignmentService: CaseAssignmentService) { }

}
