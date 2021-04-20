import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MechanicalCoursesComponent } from './mechanical-courses.component';

const routes: Routes = [{ path: '', component: MechanicalCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MechanicalCoursesRoutingModule { }
