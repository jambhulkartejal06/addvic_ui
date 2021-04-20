import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDigitalMarketingEnrollmentIntrestComponent } from './view-digital-marketing-enrollment-intrest.component';

const routes: Routes = [{ path: '', component: ViewDigitalMarketingEnrollmentIntrestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDigitalMarketingEnrollmentIntrestRoutingModule { }
