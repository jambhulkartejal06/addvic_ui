import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounsellorPortalComponent } from './counsellor-portal.component';

const routes: Routes = [{ path: '', component: CounsellorPortalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounsellorPortalRoutingModule { }
