import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDigitalMarketingCategoryRoutingModule } from './view-digital-marketing-category-routing.module';
import { ViewDigitalMarketingCategoryComponent } from './view-digital-marketing-category.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewDigitalMarketingCategoryComponent],
  imports: [
    CommonModule,
    ViewDigitalMarketingCategoryRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewDigitalMarketingCategoryModule { }
