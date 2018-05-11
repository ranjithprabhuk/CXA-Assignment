import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyComponent } from './components/spotify';
import { CarouselComponent } from './components/carousel';
import { AutoCompleteComponent } from './components/auto-complete';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'spotify'
  },
  {
    path: 'spotify',
    component: SpotifyComponent,
    data: {
      title: 'Spotify'
    }
  },
  {
    path: 'carousel',
    component: CarouselComponent,
    data: {
      title: 'Carousel'
    }
  },
  {
    path: 'auto-complete',
    component: AutoCompleteComponent,
    data: {
      title: 'Auto Complete'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseAssignmentRoutingModule { }
