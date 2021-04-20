import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItCoursesRoutingModule } from './it-courses-routing.module';
import { ItCoursesComponent } from './it-courses.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ItCoursesComponent],
  imports: [
    CommonModule,
    ItCoursesRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ItCoursesModule { }
