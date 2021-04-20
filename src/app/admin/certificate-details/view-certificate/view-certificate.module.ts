import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCertificateRoutingModule } from './view-certificate-routing.module';
import { ViewCertificateComponent } from './view-certificate.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ViewCertificateComponent],
  imports: [
    CommonModule,
    ViewCertificateRoutingModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class ViewCertificateModule { }
