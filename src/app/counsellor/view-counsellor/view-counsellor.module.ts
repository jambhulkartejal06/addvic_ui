import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCounsellorRoutingModule } from './view-counsellor-routing.module';
import { ViewCounsellorComponent } from './view-counsellor.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewCounsellorComponent],
  imports: [
    CommonModule,
    ViewCounsellorRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewCounsellorModule { }
