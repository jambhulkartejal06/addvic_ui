import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntershipCourseRoutingModule } from './intership-course-routing.module';
import { IntershipCourseComponent } from './intership-course.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [IntershipCourseComponent],
  imports: [
    CommonModule,
    IntershipCourseRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    FlexLayoutModule,
  ]
  
})
export class IntershipCourseModule { }
