import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurTrainingComponent } from './our-training.component';

const routes: Routes = [{ path: '', component: OurTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurTrainingRoutingModule { }
