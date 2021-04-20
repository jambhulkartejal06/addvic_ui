import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewItLeadComponent } from './view-it-lead.component';

const routes: Routes = [{ path: '', component: ViewItLeadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewItLeadRoutingModule { }
