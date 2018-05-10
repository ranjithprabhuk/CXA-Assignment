import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CaseAssignmentRoutingModule } from './case-assignment-routing.module';
import { CaseAssignmentService } from './case-assignment.service';
import { SpotifyComponent } from './components/spotify';

@NgModule({
  imports: [
    CaseAssignmentRoutingModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [SpotifyComponent],
  providers: [CaseAssignmentService]
})
export class CaseAssignmentModule { }
