import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewItCategoryRoutingModule } from './view-it-category-routing.module';
import { ViewItCategoryComponent } from './view-it-category.component';
import { MaterialModule } from 'src/app/materialmodule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewItCategoryComponent],
  imports: [
    CommonModule,
    ViewItCategoryRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewItCategoryModule { }
