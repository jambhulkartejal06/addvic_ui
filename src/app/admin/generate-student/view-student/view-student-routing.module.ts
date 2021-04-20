import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewStudentComponent } from './view-student.component';

const routes: Routes = [{ path: '', component: ViewStudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewStudentRoutingModule { }
