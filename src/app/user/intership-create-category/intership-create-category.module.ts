import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntershipCreateCategoryRoutingModule } from './intership-create-category-routing.module';
import { IntershipCreateCategoryComponent } from './intership-create-category.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [IntershipCreateCategoryComponent],
  imports: [
    CommonModule,
    IntershipCreateCategoryRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    FlexLayoutModule,
  ]
  
})
export class IntershipCreateCategoryModule { }
