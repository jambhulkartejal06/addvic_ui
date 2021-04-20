import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewItLeadRoutingModule } from './view-it-lead-routing.module';
import { ViewItLeadComponent } from './view-it-lead.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewItLeadComponent],
  imports: [
    CommonModule,
    ViewItLeadRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewItLeadModule { }
