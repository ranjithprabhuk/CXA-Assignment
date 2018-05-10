import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CaseAssignmentRoutingModule } from './case-assignment-routing.module';
import { CaseAssignmentService } from './case-assignment.service';
import { SpotifyComponent } from './components/spotify';

@NgModule({
  imports: [
    CaseAssignmentRoutingModule,
    FormsModule,
    CommonModule,
    LazyLoadImagesModule,
    InfiniteScrollModule
  ],
  declarations: [SpotifyComponent],
  providers: [CaseAssignmentService]
})
export class CaseAssignmentModule { }
