import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItCoursesComponent } from './it-courses.component';

const routes: Routes = [{ path: '', component: ItCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItCoursesRoutingModule { }
