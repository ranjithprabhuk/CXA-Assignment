import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CarouselModule } from 'ngx-bootstrap';
import { NgxSelectModule } from 'ngx-select-ex';
import { CaseAssignmentRoutingModule } from './case-assignment-routing.module';
import { CaseAssignmentService } from './case-assignment.service';
import { SpotifyComponent } from './components/spotify';
import { CarouselComponent } from './components/carousel';
import { AutoCompleteComponent, CustomSelectOptions } from './components/auto-complete';


@NgModule({
  imports: [
    CaseAssignmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LazyLoadImagesModule,
    InfiniteScrollModule,
    CarouselModule.forRoot(),
    NgxSelectModule.forRoot(CustomSelectOptions)
  ],
  declarations: [SpotifyComponent, CarouselComponent, AutoCompleteComponent],
  providers: [CaseAssignmentService]
})
export class CaseAssignmentModule { }
