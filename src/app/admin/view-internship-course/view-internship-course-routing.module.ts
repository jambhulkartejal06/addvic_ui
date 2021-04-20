import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewInternshipCourseComponent } from './view-internship-course.component';

const routes: Routes = [{ path: '', component: ViewInternshipCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewInternshipCourseRoutingModule { }
