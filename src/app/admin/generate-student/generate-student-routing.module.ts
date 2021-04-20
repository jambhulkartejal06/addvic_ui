import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateStudentComponent } from './generate-student.component';

const routes: Routes = [{ path: '', component: GenerateStudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateStudentRoutingModule { }
