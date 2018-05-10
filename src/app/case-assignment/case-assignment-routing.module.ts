import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyComponent } from './components/spotify';

const routes: Routes = [
  {
    path: '',
    component: SpotifyComponent,
    data: {
      title: 'Spotify'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseAssignmentRoutingModule { }
