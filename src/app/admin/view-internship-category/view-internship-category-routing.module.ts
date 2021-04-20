import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewInternshipCategoryComponent } from './view-internship-category.component';

const routes: Routes = [{ path: '', component: ViewInternshipCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewInternshipCategoryRoutingModule { }
