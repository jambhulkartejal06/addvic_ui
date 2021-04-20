import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCounsellorComponent } from './view-counsellor.component';

const routes: Routes = [{ path: '', component: ViewCounsellorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCounsellorRoutingModule { }
