import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDigitalMarketingCategoryComponent } from './view-digital-marketing-category.component';

const routes: Routes = [{ path: '', component: ViewDigitalMarketingCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDigitalMarketingCategoryRoutingModule { }
