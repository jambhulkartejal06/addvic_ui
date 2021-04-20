import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateDetailsRoutingModule } from './certificate-details-routing.module';
import { CertificateDetailsComponent } from './certificate-details.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CertificateDetailsComponent],
  imports: [
    CommonModule,
    CertificateDetailsRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CertificateDetailsModule { }
