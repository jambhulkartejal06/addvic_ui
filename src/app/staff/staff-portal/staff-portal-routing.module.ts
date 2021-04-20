import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffPortalComponent } from './staff-portal.component';

const routes: Routes = [{ path: '', component: StaffPortalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffPortalRoutingModule { }
