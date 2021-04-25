import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateVerificationRoutingModule } from './certificate-verification-routing.module';
import { CertificateVerificationComponent } from './certificate-verification.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CertificateVerificationComponent],
  imports: [
    CommonModule,
    CertificateVerificationRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ]
})
export class CertificateVerificationModule { }
