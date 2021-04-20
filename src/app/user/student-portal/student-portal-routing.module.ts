import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPortalComponent } from './student-portal.component';

const routes: Routes = [{ path: '', component: StudentPortalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentPortalRoutingModule { }
