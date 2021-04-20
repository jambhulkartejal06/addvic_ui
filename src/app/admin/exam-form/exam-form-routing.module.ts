import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamFormComponent } from './exam-form.component';

const routes: Routes = [{ path: '', component: ExamFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamFormRoutingModule { }
