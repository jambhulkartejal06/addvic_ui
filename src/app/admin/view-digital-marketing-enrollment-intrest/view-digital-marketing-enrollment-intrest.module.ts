import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDigitalMarketingEnrollmentIntrestRoutingModule } from './view-digital-marketing-enrollment-intrest-routing.module';
import { ViewDigitalMarketingEnrollmentIntrestComponent } from './view-digital-marketing-enrollment-intrest.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewDigitalMarketingEnrollmentIntrestComponent],
  imports: [
    CommonModule,
    ViewDigitalMarketingEnrollmentIntrestRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewDigitalMarketingEnrollmentIntrestModule { }
