import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalCreateCategoryRoutingModule } from './digital-create-category-routing.module';
import { DigitalCreateCategoryComponent } from './digital-create-category.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DigitalCreateCategoryComponent],
  imports: [
    CommonModule,
    DigitalCreateCategoryRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    FlexLayoutModule,
  ]
  
})
export class DigitalCreateCategoryModule { }
