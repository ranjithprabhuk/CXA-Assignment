import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyComponent } from './components/spotify';
import { CarouselComponent } from './components/carousel';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseAssignmentRoutingModule { }
