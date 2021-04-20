import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamListRoutingModule } from './exam-list-routing.module';
import { ExamListComponent } from './exam-list.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ExamListComponent],
  imports: [
    CommonModule,
    ExamListRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExamListModule { }
