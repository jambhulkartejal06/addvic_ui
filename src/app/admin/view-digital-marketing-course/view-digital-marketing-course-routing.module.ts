import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDigitalMarketingCourseComponent } from './view-digital-marketing-course.component';

const routes: Routes = [{ path: '', component: ViewDigitalMarketingCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDigitalMarketingCourseRoutingModule { }
