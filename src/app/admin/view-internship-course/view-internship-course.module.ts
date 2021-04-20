import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewInternshipCourseRoutingModule } from './view-internship-course-routing.module';
import { ViewInternshipCourseComponent } from './view-internship-course.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewInternshipCourseComponent],
  imports: [
    CommonModule,
    ViewInternshipCourseRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewInternshipCourseModule { }
