import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewMechLeadRoutingModule } from './view-mech-lead-routing.module';
import { ViewMechLeadComponent } from './view-mech-lead.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewMechLeadComponent],
  imports: [
    CommonModule,
    ViewMechLeadRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewMechLeadModule { }
