import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewItCategoryComponent } from './view-it-category.component';

const routes: Routes = [{ path: '', component: ViewItCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewItCategoryRoutingModule { }
