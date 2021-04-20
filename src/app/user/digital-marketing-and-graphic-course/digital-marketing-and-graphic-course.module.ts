import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalMarketingAndGraphicCourseRoutingModule } from './digital-marketing-and-graphic-course-routing.module';
import { DigitalMarketingAndGraphicCourseComponent } from './digital-marketing-and-graphic-course.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DigitalMarketingAndGraphicCourseComponent],
  imports: [
    CommonModule,
    DigitalMarketingAndGraphicCourseRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    FlexLayoutModule,
  ]
})
export class DigitalMarketingAndGraphicCourseModule { }
