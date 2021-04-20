import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHiringComponent } from './view-hiring.component';

const routes: Routes = [{ path: '', component: ViewHiringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewHiringRoutingModule { }
