import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertificateDetailsComponent } from './certificate-details.component';

const routes: Routes = [{ path: '', component: CertificateDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateDetailsRoutingModule { }
