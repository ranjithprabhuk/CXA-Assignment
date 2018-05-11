import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyComponent } from './components/spotify';
import { CarouselComponent } from './components/carousel';
import { InputSelectorComponent } from './components/input-selector';

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
    path: 'input-selector',
    component: InputSelectorComponent,
    data: {
      title: 'Input Selector'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseAssignmentRoutingModule { }
