import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewItCoursesComponent } from './view-it-courses.component';

const routes: Routes = [{ path: '', component: ViewItCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewItCoursesRoutingModule { }
