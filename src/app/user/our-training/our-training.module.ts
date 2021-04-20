import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTrainingRoutingModule } from './our-training-routing.module';
import { OurTrainingComponent } from './our-training.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [OurTrainingComponent],
  imports: [
    CommonModule,
    OurTrainingRoutingModule,
    MaterialModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    FlexLayoutModule,
   
  ]
})
export class OurTrainingModule { }
