import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewInternshipEnrollmentIntrestComponent } from './view-internship-enrollment-intrest.component';

const routes: Routes = [{ path: '', component: ViewInternshipEnrollmentIntrestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewInternshipEnrollmentIntrestRoutingModule { }
