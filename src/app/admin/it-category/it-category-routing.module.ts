import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItCategoryComponent } from './it-category.component';

const routes: Routes = [{ path: '', component: ItCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItCategoryRoutingModule { }
