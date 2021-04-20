import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntershipCourseComponent } from './intership-course.component';

const routes: Routes = [{ path: '', component: IntershipCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntershipCourseRoutingModule { }
