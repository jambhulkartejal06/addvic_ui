import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPortalRoutingModule } from './student-portal-routing.module';
import { StudentPortalComponent } from './student-portal.component';


@NgModule({
  declarations: [StudentPortalComponent],
  imports: [
    CommonModule,
    StudentPortalRoutingModule
  ]
})
export class StudentPortalModule { }
