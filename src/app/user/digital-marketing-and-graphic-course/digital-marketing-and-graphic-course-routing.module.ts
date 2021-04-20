import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalMarketingAndGraphicCourseComponent } from './digital-marketing-and-graphic-course.component';

const routes: Routes = [{ path: '', component: DigitalMarketingAndGraphicCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalMarketingAndGraphicCourseRoutingModule { }
