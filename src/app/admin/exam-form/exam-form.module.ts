import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamFormRoutingModule } from './exam-form-routing.module';
import { ExamFormComponent } from './exam-form.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ExamFormComponent],
  imports: [
    CommonModule,
    ExamFormRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ExamFormModule { }
