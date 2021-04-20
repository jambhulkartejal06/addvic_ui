import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntershipCreateCourseRoutingModule } from './intership-create-course-routing.module';
import { IntershipCreateCourseComponent } from './intership-create-course.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [IntershipCreateCourseComponent],
  imports: [
    CommonModule,
    IntershipCreateCourseRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    FlexLayoutModule,
  
  ]
})
export class IntershipCreateCourseModule { }
