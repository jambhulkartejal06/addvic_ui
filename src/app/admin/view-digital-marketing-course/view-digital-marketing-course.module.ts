import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDigitalMarketingCourseRoutingModule } from './view-digital-marketing-course-routing.module';
import { ViewDigitalMarketingCourseComponent } from './view-digital-marketing-course.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewDigitalMarketingCourseComponent],
  imports: [
    CommonModule,
    ViewDigitalMarketingCourseRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewDigitalMarketingCourseModule { }
