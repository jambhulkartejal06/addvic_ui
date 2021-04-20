import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewInternshipEnrollmentIntrestRoutingModule } from './view-internship-enrollment-intrest-routing.module';
import { ViewInternshipEnrollmentIntrestComponent } from './view-internship-enrollment-intrest.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewInternshipEnrollmentIntrestComponent],
  imports: [
    CommonModule,
    ViewInternshipEnrollmentIntrestRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewInternshipEnrollmentIntrestModule { }
