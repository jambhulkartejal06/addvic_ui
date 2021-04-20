import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCertificateComponent } from './view-certificate.component';

const routes: Routes = [{ path: '', component: ViewCertificateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewCertificateRoutingModule { }
