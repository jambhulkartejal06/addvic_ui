import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechanicalDesignComponent } from './mechanical-design.component';

const routes: Routes = [{ path: '', component: MechanicalDesignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MechanicalDesignRoutingModule { }
