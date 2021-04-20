import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalCreateCategoryComponent } from './digital-create-category.component';

const routes: Routes = [{ path: '', component: DigitalCreateCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalCreateCategoryRoutingModule { }
