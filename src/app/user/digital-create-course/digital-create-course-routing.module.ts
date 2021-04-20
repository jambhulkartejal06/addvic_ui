import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalCreateCourseComponent } from './digital-create-course.component';

const routes: Routes = [{ path: '', component: DigitalCreateCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalCreateCourseRoutingModule { }
