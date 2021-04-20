import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounsellorRoutingModule } from './counsellor-routing.module';
import { CounsellorComponent } from './counsellor.component';
import { MaterialModule } from '../materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [CounsellorComponent],
  imports: [
    CommonModule,
    CounsellorRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class CounsellorModule { }
