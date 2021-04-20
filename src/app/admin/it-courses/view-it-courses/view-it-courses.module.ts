import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewItCoursesRoutingModule } from './view-it-courses-routing.module';
import { ViewItCoursesComponent } from './view-it-courses.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewItCoursesComponent],
  imports: [
    CommonModule,
    ViewItCoursesRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewItCoursesModule { }
