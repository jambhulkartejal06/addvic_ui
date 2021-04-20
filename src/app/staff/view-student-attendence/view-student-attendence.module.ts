import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewStudentAttendenceRoutingModule } from './view-student-attendence-routing.module';
import { ViewStudentAttendenceComponent } from './view-student-attendence.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewStudentAttendenceComponent],
  imports: [
    CommonModule,
    ViewStudentAttendenceRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewStudentAttendenceModule { }
