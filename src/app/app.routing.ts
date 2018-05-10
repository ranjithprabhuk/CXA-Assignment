import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layouts';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'case-assignment',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Assignments'
    },
    children: [
      {
        path: 'case-assignment',
        loadChildren: './case-assignment/case-assignment.module#CaseAssignmentModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
