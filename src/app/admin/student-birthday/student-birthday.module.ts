import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentBirthdayRoutingModule } from './student-birthday-routing.module';
import { StudentBirthdayComponent } from './student-birthday.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StudentBirthdayComponent],
  imports: [
    CommonModule,
    StudentBirthdayRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentBirthdayModule { }
