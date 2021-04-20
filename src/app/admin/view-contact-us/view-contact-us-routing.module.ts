import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewContactUsComponent } from './view-contact-us.component';

const routes: Routes = [{ path: '', component: ViewContactUsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewContactUsRoutingModule { }
