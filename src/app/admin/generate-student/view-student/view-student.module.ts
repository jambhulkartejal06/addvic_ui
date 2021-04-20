import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStudentRoutingModule } from './view-student-routing.module';
import { ViewStudentComponent } from './view-student.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewStudentComponent],
  imports: [
    CommonModule,
    ViewStudentRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewStudentModule { }
