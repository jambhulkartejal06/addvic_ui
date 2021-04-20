import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalCreateCourseRoutingModule } from './digital-create-course-routing.module';
import { DigitalCreateCourseComponent } from './digital-create-course.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DigitalCreateCourseComponent],
  imports: [
    CommonModule,
    DigitalCreateCourseRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    FlexLayoutModule,
  ]
  
})
export class DigitalCreateCourseModule { }
