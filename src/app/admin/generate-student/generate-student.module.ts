import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateStudentRoutingModule } from './generate-student-routing.module';
import { GenerateStudentComponent } from './generate-student.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';


@NgModule({
  declarations: [GenerateStudentComponent],
  imports: [
    CommonModule,
    GenerateStudentRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class GenerateStudentModule { }
