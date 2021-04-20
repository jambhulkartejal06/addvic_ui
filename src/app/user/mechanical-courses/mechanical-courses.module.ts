import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechanicalCoursesRoutingModule } from './mechanical-courses-routing.module';
import { MechanicalCoursesComponent } from './mechanical-courses.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { RestrictCharPipe } from 'src/app/restrict-char.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [MechanicalCoursesComponent, RestrictCharPipe],
  imports: [
    CommonModule,
    MechanicalCoursesRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    FlexLayoutModule,
  ]
})
export class MechanicalCoursesModule { }
