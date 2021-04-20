import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntershipCreateCourseComponent } from './intership-create-course.component';

const routes: Routes = [{ path: '', component: IntershipCreateCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntershipCreateCourseRoutingModule { }
