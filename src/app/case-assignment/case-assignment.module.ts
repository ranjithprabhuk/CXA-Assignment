import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarouselModule } from 'ngx-bootstrap';
import { CaseAssignmentRoutingModule } from './case-assignment-routing.module';
import { CaseAssignmentService } from './case-assignment.service';
import { SpotifyComponent } from './components/spotify';
import { CarouselComponent } from './components/carousel';
import { AutoCompleteComponent } from './components/auto-complete';

@NgModule({
  imports: [
    CaseAssignmentRoutingModule,
    FormsModule,
    CommonModule,
    LazyLoadImagesModule,
    InfiniteScrollModule,
    CarouselModule.forRoot()
  ],
  declarations: [SpotifyComponent, CarouselComponent, AutoCompleteComponent],
  providers: [CaseAssignmentService]
})
export class CaseAssignmentModule { }
