import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffPortalRoutingModule } from './staff-portal-routing.module';
import { StaffPortalComponent } from './staff-portal.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StaffPortalComponent],
  imports: [
    CommonModule,
    StaffPortalRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StaffPortalModule { }
