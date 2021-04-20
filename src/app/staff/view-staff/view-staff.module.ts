import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewStaffRoutingModule } from './view-staff-routing.module';
import { ViewStaffComponent } from './view-staff.component';


@NgModule({
  declarations: [ViewStaffComponent],
  imports: [
    CommonModule,
    ViewStaffRoutingModule
  ]
})
export class ViewStaffModule { }
