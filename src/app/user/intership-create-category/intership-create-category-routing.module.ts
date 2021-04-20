import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntershipCreateCategoryComponent } from './intership-create-category.component';

const routes: Routes = [{ path: '', component: IntershipCreateCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntershipCreateCategoryRoutingModule { }
