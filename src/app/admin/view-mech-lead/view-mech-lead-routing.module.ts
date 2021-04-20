import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMechLeadComponent } from './view-mech-lead.component';

const routes: Routes = [{ path: '', component: ViewMechLeadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewMechLeadRoutingModule { }
